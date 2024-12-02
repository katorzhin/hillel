$(document).ready(function () {
    const $taskInput = $('#task-input');

    function addTask() {
        const taskText = $taskInput.val().trim();
        if (taskText) {

            const listItem = document.createElement('li');

            listItem.textContent = taskText;
            listItem.classList.add('list-group-item', 'task-item');

            document.querySelector('#todo-list').appendChild(listItem);

            $taskInput.val('');
        } else {
            alert('Please enter a task!');
        }
    }

    $('#add-task').on('click', addTask);

    $taskInput.on('keydown', function (e) {
        if (e.key === 'Enter') {
            addTask();
            e.preventDefault();
        }
    });

    $(document).on('click', '.task-item', function () {
        const taskText = $(this).text();
        $('#task-text').text(taskText);
        const modal = new bootstrap.Modal($('#taskModal'));
        modal.show();
    });
});