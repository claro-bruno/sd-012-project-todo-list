
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


// ### 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"

// **O que será verificado:**

// - Será verificada a existência de um elemento `ol` com o id `lista-tarefas`.
let listTask = document.createElement("ol");
listTask.id = "lista-tarefas";
document.body.appendChild(listTask);



// ### 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

// **O que será verificado:**

// - Será verificada a existência de um elemento do tipo `button` com o id `criar-tarefa`

// - No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

// - A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.
