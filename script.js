// Requisito 5
// Declarar variável que captura o botão "Adicionar"
// Declarar variável que captura o input "Name"
// Declarar a variável que cria um "li"
// Criar a função que vai pegar o texto do campo tarefa e adicionar como uma nova "li" na "ol"
let addTaskBtn = document.querySelector("#criar-tarefa");
let taskName = document.querySelector("#texto-tarefa");
let taskList = document.querySelector("#lista-tarefas");

function createTask() {
    let  newTaskListItem =  document.createElement("li");
    newTaskListItem.className = "tasks";
    newTaskListItem.innerHTML = taskName.value;

    taskList.appendChild(newTaskListItem);
    taskName.value = "";
}; 

addTaskBtn.addEventListener("click", createTask);









