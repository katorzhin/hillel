import"./main.scss";import $ from"jquery";import"bootstrap/dist/css/bootstrap.min.css";$(document).ready((function(){var t=$(".js--form__input"),e=$("#todo-list"),o=$("#task-text"),n=new bootstrap.Modal($("#taskModal"));function a(){var a=t.val().trim();if(a){var s=$("<li>").addClass("list-group-item todo-item d-flex justify-content-between align-items-center"),i=$("<span>").addClass("todo-item__description").text(a),d=$("<input>").attr("type","checkbox").addClass("todo-item__checkbox me-2").on("change",(function(){i.toggleClass("text-decoration-line-through")})),r=$("<button>").addClass("btn btn-danger btn-sm todo-item__delete").text("Delete").on("click",(function(){s.remove()}));s.on("click",(function(t){$(t.target).is("button, input")||(o.text(a),n.show())})),s.prepend(d),s.append(i),s.append(r),e.append(s),t.val("")}else alert("Please enter the task!")}$("#add-task").on("click",a),t.on("keydown",(function(t){"Enter"===t.key&&(t.preventDefault(),a())}))}));