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
    caughtItem.addEventListener("dblclick", itemCompleted);
    caughtItem.innerHTML = contentNewTodo.value;
    contentNewTodo.value = "";
  };
};

bornTodo.addEventListener("click", funcBornTodo);

function changeColor(event) {
  membersTodo = document.getElementsByClassName('classTodo');
  for (let indice0 = 0; indice0 < membersTodo.length; indice0 += 1) {
    membersTodo[indice0].style.backgroundColor = "";
  }
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
};

function itemCompleted(event) {
  if (event.target.classList.contains("completed") == false) {
    event.target.classList.add('completed');
    console.log(event.target);

  } else {
    event.target.classList.remove('completed');
  }

};
