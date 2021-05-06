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

let changes = document.getElementById("lista-tarefas");

changes.addEventListener("click", function (event) {

  if (event.target.className === "tasks") {
    event.target.style.backgroundColor = document.querySelector(".tasks").style.backgroundColor = "rgb(128, 128, 128)";
  }

});






