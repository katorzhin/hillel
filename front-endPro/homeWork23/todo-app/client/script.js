const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

const fetchTasks = async () => {
    const response = await fetch("http://localhost:8080/todos");
    const tasks = await response.json();
    taskList.innerHTML = "";
    tasks.forEach(addTaskToDOM);
};

const addTaskToDOM = (task) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.dataset.id = task._id;

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = task.text;
    taskInput.disabled = true;

    const editBtn = document.createElement("button");
    editBtn.className = "btn edit-btn";
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn delete-btn";
    deleteBtn.textContent = "Delete";

    taskItem.append(taskInput, editBtn, deleteBtn);
    taskList.appendChild(taskItem);

    editBtn.addEventListener("click", () => toggleEditTask(taskInput, editBtn, task._id));
    deleteBtn.addEventListener("click", () => deleteTask(task._id));
};

addTaskBtn.addEventListener("click", async () => {
    const text = taskInput.value.trim();
    if (text) {
        const response = await fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, checked: false }),
        });
        const newTask = await response.json();
        addTaskToDOM(newTask);
        taskInput.value = "";
    }
});

const toggleEditTask = async (input, button, id) => {
    if (button.textContent === "Edit") {
        input.disabled = false;
        input.focus();
        button.textContent = "Save";
    } else {
        const newText = input.value.trim();
        await fetch(`http://localhost:8080/todos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: newText }),
        });
        input.disabled = true;
        button.textContent = "Edit";
    }
};

const deleteTask = async (id) => {
    await fetch(`http://localhost:8080/todos/${id}`, { method: "DELETE" });
    document.querySelector(`[data-id="${id}"]`).remove();
};

fetchTasks();
