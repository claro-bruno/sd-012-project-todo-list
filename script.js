
let header = document.querySelector("#text");
let title = document.createElement("h1");
header.appendChild(title);
title.innerText = "Minha Lista de Tarefas";

let main = document.querySelector("#main");
let par = document.createElement("p");
par.id = "funcionamento";
par.innerText = "Clique duas vezes em um item para marcá-lo como completo"
main.appendChild(par);

