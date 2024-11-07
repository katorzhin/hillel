document.getElementById("task-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-input");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById("task-list");

        const newTask = document.createElement("li");

        const taskTextNode = document.createTextNode(taskText);
        newTask.appendChild(taskTextNode);

        newTask.appendChild(document.createTextNode(" "));

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Видалити";

        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);

        event.target.reset();
    } else {
        alert("Будь ласка, введіть текст завдання");
    }
});


document.getElementById("task-list").addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const taskItem = event.target.parentElement;
        taskItem.remove();
    }
});
