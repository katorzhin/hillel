$(document).ready(function () {
    const $taskInput = $('.js--form__input');
    const $todoList = $('#todo-list');
    const $taskTextModal = $('#task-text');
    const taskModal = new bootstrap.Modal($('#taskModal'));

    function addTask() {
        const taskText = $taskInput.val().trim();

        if (!taskText) {
            alert('Введите задачу!');
            return;
        }

        const $taskItem = $('<li>')
            .addClass('list-group-item todo-item d-flex justify-content-between align-items-center');

        const $taskText = $('<span>')
            .addClass('todo-item__description')
            .text(taskText);

        const $checkbox = $('<input>')
            .attr('type', 'checkbox')
            .addClass('todo-item__checkbox me-2')
            .on('change', function () {
                $taskText.toggleClass('text-decoration-line-through');
            });

        const $deleteButton = $('<button>')
            .addClass('btn btn-danger btn-sm todo-item__delete')
            .text('Видалити')
            .on('click', function () {
                $taskItem.remove();
            });

        $taskItem.on('click', function (e) {
            if (!$(e.target).is('button, input')) {
                $taskTextModal.text(taskText);
                taskModal.show();
            }
        });

        $taskItem.prepend($checkbox);
        $taskItem.append($taskText);
        $taskItem.append($deleteButton);

        $todoList.append($taskItem);


        $taskInput.val('');
    }

    $('#add-task').on('click', addTask);

    $taskInput.on('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTask();
        }
    });
});
