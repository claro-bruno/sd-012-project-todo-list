

let title = document.createElement("header");
title.innerHTML = "Minha Lista de Tarefas";
document.body.appendChild(title);



let paragraph = document.createElement("p");
paragraph.id = "funcionamento";
paragraph.innerText = "Clique duas vezes em um item para marcá-lo como completo";
document.body.appendChild(paragraph);



let input = document.createElement("input");
input.id = "texto-tarefa";
document.body.appendChild(input);



let listTask = document.createElement("ol");
listTask.id = "lista-tarefas";
document.body.appendChild(listTask);





let buttonTask = document.createElement("button");
buttonTask.id = "criar-tarefa";
document.body.appendChild(buttonTask);

buttonTask.addEventListener("click", addTask);

function addTask(){
  let task = document.createElement("li");
  task.id = "tarefa";
  listTask.appendChild(task);
  task.innerText = input.value; //lembrar da diferença entre innerHTML e innerText para não confundir navamente.
  input.value = "";
}

