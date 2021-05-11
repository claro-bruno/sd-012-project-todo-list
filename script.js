const inputButton = document.getElementById("texto-tarefa");
const taskList = document.getElementById("lista-tarefas");
const input = document.getElementById("criar-tarefa");

input.addEventListener('click', () => {
    const taskBoard = document.createElement("li");
    taskBoard.innerHTML = inputButton.value;
    inputButton.value = '';
    event.preventDefault();
    taskList.appendChild(taskBoard);
});   


// Em pesquisa foi localizada a função preventDefault(), evitando que o envio da tarefa resete o formulário, gravando seu conteúdo; acessado em (https://www.w3schools.com/jsref/event_preventdefault.asp)

