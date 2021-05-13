
//Adicionando à sua lista o título "Minha Lista de Tarefas" em uma tag <header>.

let title = document.createElement("header");
title.innerHTML = "Minha Lista de Tarefas";
document.body.appendChild(title);


//Adicionando abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo".

let paragraph = document.createElement("p");
paragraph.id = "funcionamento";
paragraph.innerText = "Clique duas vezes em um item para marcá-lo como completo";
document.body.appendChild(paragraph);


//Adicionando um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista.

let input = document.createElement("input");
input.id = "texto-tarefa";
document.body.appendChild(input);


//Adicionando uma lista ordenada de tarefas com o id="lista-tarefas".

let listTask = document.createElement("ol");
listTask.id = "lista-tarefas";
document.body.appendChild(listTask);


// Adicionando um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.

let buttonTask = document.createElement("button");
buttonTask.id = "criar-tarefa";
document.body.appendChild(buttonTask);

buttonTask.addEventListener("click", addTask);

function addTask(){
  let task = document.createElement("li");
  task.addEventListener('click', graySelect); //pocisionei a escuta já na criação do do elemento, para chamar somente a função mais adiante.
  task.addEventListener('dblclick', checkTask); //pocisionei a escuta já na criação do do elemento, para chamar somente a função mais adiante.
  task.className = "tarefa";
  listTask.appendChild(task);
  task.innerText = input.value; //lembrar da diferença entre innerHTML e innerText para não confundir navamente.
  input.value = ""; //limpa o imput assim que a entrada é adicionada a lista.
}

// FUNÇÃO SELECIONA ITEM COM BACKGROUND NA COR CINZA;
function graySelect(event){
  let select = document.querySelector(".select");
    if (select) {
      select.classList.remove("select");
    }
      event.target.classList.add("select");
  }

//FUNÇÃO QUE MARCA O ITEM COM RISCADO, INDICANDO A CONCLUSÃO DA TAREFA;
  function checkTask(event) {
      event.target.classList.toggle('completed');
  }


