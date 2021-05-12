
// ## 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag <header>

let title = document.createElement("header");
title.innerHTML = "Minha Lista de Tarefas";
document.body.appendChild(title);

// ### 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"

let paragraph = document.createElement("p");
paragraph.id = "funcionamento";
paragraph.innerText = "Clique duas vezes em um item para marcá-lo como completo";
document.body.appendChild(paragraph);

// ## 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

// **O que será verificado:**

// - Será verificada a existência de um elemento do tipo `input` com o id `texto-tarefa`.

let input = document.createElement("input");
input.id = "texto-tarefa";
document.body.appendChild(input);

