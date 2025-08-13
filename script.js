document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");

  const addTodo = () => {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = todoText;
      todoList.appendChild(listItem);
      todoInput.value = "";
    }
  };

  addButton.addEventListener("click", addTodo);

  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  });
});
