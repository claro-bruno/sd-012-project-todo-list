const inputButton = document.getElementById("texto-tarefa");
const taskList = document.getElementById("lista-tarefas");
const input = document.getElementById("criar-tarefa");

function createTask() {
    let taskBoard = document.createElement("li");
    taskBoard.className = "task";
    taskBoard.innerHTML = inputButton.value;
    taskList.appendChild(taskBoard);
    inputButton.innerHTML = '';
}   

input.addEventListener('click', (event)=> {
    event.preventDefault();
    createTask();
});

// Em pesquisa foi localizada a função preventDefault(), evitando que o envio da tarefa resete o formulário, gravando seu conteúdo; acessado em (https://www.w3schools.com/jsref/event_preventdefault.asp)

