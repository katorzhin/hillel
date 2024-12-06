"use strict";

$(document).ready(function () {
  var $taskInput = $('.js--form__input');
  var $todoList = $('#todo-list');
  var $taskTextModal = $('#task-text');
  var taskModal = new bootstrap.Modal($('#taskModal'));
  function addTask() {
    var taskText = $taskInput.val().trim();
    if (!taskText) {
      alert('Please enter the task!');
      return;
    }
    var $taskItem = $('<li>').addClass('list-group-item todo-item d-flex justify-content-between align-items-center');
    var $taskText = $('<span>').addClass('todo-item__description').text(taskText);
    var $checkbox = $('<input>').attr('type', 'checkbox').addClass('todo-item__checkbox me-2').on('change', function () {
      $taskText.toggleClass('text-decoration-line-through');
    });
    var $deleteButton = $('<button>').addClass('btn btn-danger btn-sm todo-item__delete').text('Delete').on('click', function () {
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