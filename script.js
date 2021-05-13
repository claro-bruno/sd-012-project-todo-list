let bornTodo = document.querySelector("#criar-tarefa")
let countList = document.getElementById("lista-tarefas");

function funcBornTodo() {
  let contentNewTodo = document.querySelector("#texto-tarefa");
  if (contentNewTodo.value == '') {} else {
    let newItem = document.createElement("li");
    countList.appendChild(newItem);
    let caughtItem = countList.lastChild
    caughtItem.classList.add("classTodo");
    caughtItem.addEventListener("click", changeColor);
    caughtItem.innerHTML = contentNewTodo.value;
    contentNewTodo.value = "";
  };
};

bornTodo.addEventListener("click", funcBornTodo);

function changeColor(event) {
  console.log("hello");
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
};
