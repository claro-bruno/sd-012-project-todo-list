let bornTodo = document.querySelector("#criar-tarefa")
let countList = document.getElementById("lista-tarefas");

function funcBornTodo() {
  let contentNewTodo = document.querySelector("#texto-tarefa");
  if (contentNewTodo.value == '') {} else {
    let newItem = document.createElement("li");
    countList.appendChild(newItem);
    let caughtItem = countList.lastChild
    caughtItem.classList.add("classTodo");
    caughtItem.innerHTML = contentNewTodo.value;
    contentNewTodo.value = "";
  };
};

bornTodo.addEventListener("click", funcBornTodo);

// function changeColor(){
//   for (let indice0 = 0; indice0 < countList.length; indice0 += 1) {
//     let selectItem = countList.children[indice0];
//     event.target.selectItem ==
//       selectItem.style.color = rgb(128, 128, 128);
//   }
// };
// let membersTodo = document.getElementsByClassName()
// countList.addEventListener("click", changeColor);
