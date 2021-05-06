const inputButton = document.getElementById("texto-tarefa");
const taskList = document.getElementById("lista-tarefas");

function createTask() {
    let taskBoard = document.createElement("li");
    taskBoard.className = "task";
    taskBoard.innerHTML = inputButton.value;
    taskList.appendChild(taskBoard);
}   

function clearBox() {
    inputButton.innerHTML = '';
};