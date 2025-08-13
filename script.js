document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const renderTodos = () => {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
      const listItem = document.createElement("li");
      listItem.textContent = todo.text;
      todoList.appendChild(listItem);
    });
  };

  const addTodo = () => {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      todos.push({ text: todoText, completed: false });
      saveTodos();
      renderTodos();
      todoInput.value = "";
    }
  };

  addButton.addEventListener("click", addTodo);
  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  renderTodos();
});
