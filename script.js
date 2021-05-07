let bornTodo = document.querySelector("#criar-tarefa")

function funcBornTodo() {
  let contentNewTodo = document.querySelector("#texto-tarefa");
  if (contentNewTodo.value == '') {} else {
    let countList = document.getElementById("lista-tarefas");
    let newItem = document.createElement("li");
    countList.appendChild(newItem);
    document.getElementById("lista-tarefas").lastChild.innerHTML = contentNewTodo.value;
    contentNewTodo.value = "";
  };

};

bornTodo.addEventListener("click", funcBornTodo);
