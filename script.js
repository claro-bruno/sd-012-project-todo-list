let header = document.querySelector("#text");
let title = document.createElement("h1");
header.appendChild(title);
title.innerText = "Minha Lista de Tarefas";

let main = document.querySelector("#main");
let par = document.createElement("p");
par.id = "funcionamento";
par.innerText = "Clique duas vezes em um item para marcá-lo como completo"
main.appendChild(par);

let section = document.querySelector("#section");
let inp = document.createElement("input");
inp.id = "texto-tarefa";
section.appendChild(inp);

let bt = document.createElement("button");
bt.id = "criar-tarefa";
bt.innerHTML = "Add Task"
section.appendChild(bt);

let button = document.querySelector("#criar-tarefa");
let list = document.querySelector("#lista-tarefas");
let textTasks = document.querySelector("#texto-tarefa");

button.addEventListener("click", function () {
  let makeLi = document.createElement("li");
  makeLi.className = "tasks";
  makeLi.textContent = textTasks.value;
  list.appendChild(makeLi);
  textTasks.value = "";

});

let ordenedList = document.querySelectorAll("#lista-tarefas");

for (let index = 0; index < ordenedList.length; index += 1) {
  ordenedList[index].addEventListener("click", function (event) {

    if (event.target.className === "tasks") {
      if (document.querySelector("#changeColor") !== null) {
        document.querySelector("#changeColor").removeAttribute("id");
      }
      event.target.id = "changeColor";
    }
  });
}


let listOrdened = document.querySelectorAll("#lista-tarefas");

for (let index = 0; index < listOrdened.length; index += 1) {
  listOrdened[index].addEventListener("dblclick", function (event) {

    if(event.target.className === "tasks"){
        event.target.className = "completed"
    } else {
        event.target.className = "tasks";
    }
  });
}


let apagar = document.querySelector("#apaga-tudo");

apagar.addEventListener('click', function () {

  document.querySelector('#lista-tarefas').innerHTML = '';

});

let apagarFinalizados = document.querySelector("#remover-finalizados")

apagarFinalizados.addEventListener("click", function(){

let tasksCompletas = document.getElementsByClassName("completed");
for(let i = tasksCompletas.length -1; i >= 0 ; i -= 1 ){
  tasksCompletas[i].remove();
  
}

});
