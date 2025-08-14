const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const saveAndRenderTodos = () => {
  saveTodos();
  renderTodos();
}

const renderTodos = () => {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.className = `todo-item${todo.completed ? " completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      todos[index].completed = checkbox.checked;
      saveAndRenderTodos();
    });

    const textSpan = document.createElement("span");
    textSpan.className = "text";
    textSpan.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      todos.splice(index, 1);
      saveAndRenderTodos();
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(textSpan);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  });
};

const addTodo = () => {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    todos.push({ text: todoText, completed: false });
    saveAndRenderTodos();
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
