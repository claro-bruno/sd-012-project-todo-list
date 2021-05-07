let bornTodo = document.querySelector("#criar-tarefa")
let countList = document.getElementById("lista-tarefas");
let newItem = document.createElement("li");

function funcBornTodo() {
  countList.appendChild(newItem);
  let contentNewTodo = document.querySelector("#texto-tarefa").value;
  
};

bornTodo.addEventListener("click", funcBornTodo);
