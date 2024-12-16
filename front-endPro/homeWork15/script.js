const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

function getTodosFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

function saveTodosToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function updateLocalStorage() {
    const todos = Array.from(document.querySelectorAll('.todo-item')).map(li => ({
        id: +li.getAttribute('data-id'),
        text: li.querySelector('.todo-item__description').textContent,
        completed: li.querySelector('.todo-item__checkbox').checked
    }));
    saveTodosToLocalStorage(todos);
}

function removeFromLocalStorage(id) {
    const todos = getTodosFromLocalStorage();
    const updatedTodos = todos.filter(todo => todo.id !== id);
    saveTodosToLocalStorage(updatedTodos);
}

window.addEventListener('load', () => {
    const savedTodos = getTodosFromLocalStorage();
    savedTodos.forEach(todo => addTodoElement(todo));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText === '') return;

    const newTodo = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    addTodoElement(newTodo);
    const todos = getTodosFromLocalStorage();
    todos.push(newTodo);
    saveTodosToLocalStorage(todos);
    input.value = '';
});

function addTodoElement(todo) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.setAttribute('data-id', todo.id);

    if (todo.completed) {
        li.classList.add('todo-item--completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-item__checkbox';
    checkbox.checked = todo.completed;

    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        li.classList.toggle('todo-item--completed');
        updateLocalStorage();
    });

    const span = document.createElement('span');
    span.className = 'todo-item__description';
    span.textContent = todo.text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'todo-item__delete';
    deleteButton.textContent = 'Видалити';

    deleteButton.addEventListener('click', () => {
        li.remove();
        removeFromLocalStorage(todo.id);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    todosWrapper.appendChild(li);
}
