import { Constructor } from "./Imports.js";

// ? Creando Componente
const app = new Constructor({
  el: "#todo-list",
  data: { todoList: [] },
  template: function (props) {
    if (props.todoList.length < 1) return `<p>Lista sin Tareas por Hacer</p>`;
    let todos = props.todoList.map((item) => `<li>${item}</li>`).join("");
    return todos;
  },
});

// ? Valores Default
app.setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
});

document.addEventListener("DOMContentLoaded", app.render);

document.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;
  e.preventDefault();

  const item = document.getElementById("todo-item");
  if (!item) return;
  const data = app.getState();
  data.todoList.push(item.value);
  app.setState({ todoList: data.todoList });

  item.value = "";
  item.focus();
});

// ? Igual que Vue.js
