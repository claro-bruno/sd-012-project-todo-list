let bornTodo = document.querySelector("#criar-tarefa")
let countList = document.getElementById("lista-tarefas");

function funcBornTodo() {
  let contentNewTodo= document.querySelector("#texto-tarefa");
  if (contentNewTodo.value == '') {} else {
    let newItem = document.createElement("li");
    let newButton = document.createElement("button");
    countList.appendChild(newItem);
    let caughtItem = document.getElementById("lista-tarefas").lastChild
        newItem.appendChild(newButton);
    caughtItem.innerHTML = contentNewTodo.value;
    contentNewTodo.value = "";
  };
};

bornTodo.addEventListener("click", funcBornTodo);

function changecolor() {
 caughtButton.style.color = rgb(128, 128, 128)
};

countList.addEventListener("click", changecolor);