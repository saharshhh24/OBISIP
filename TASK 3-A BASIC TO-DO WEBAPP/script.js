function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    if (todoInput.value.trim() !== "") {
      const todoItem = document.createElement("li");
      todoItem.className = "todo-item";
      todoItem.innerHTML = `
        <input type="checkbox">
        <span>${todoInput.value}</span>
        <span class="checkmark"></span>
        <button class="remove-button" onclick="removeTodo(this)">Remove</button>
      `;
      todoList.appendChild(todoItem);

      todoInput.value = "";
    }
  }

  function removeTodo(button) {
    const todoItem = button.parentNode;
    todoItem.style.animation = "fadeOut 0.5s forwards";

    setTimeout(() => {
      const todoList = document.getElementById("todo-list");
      todoList.removeChild(todoItem);
    }, 500);
  }
  
