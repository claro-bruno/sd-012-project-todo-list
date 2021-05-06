//Colocar Tarefa Nova na Lista

function createTask() {
    let taskList = document.querySelector("#lista-tarefas")
    let inputValue = document.querySelector("#texto-tarefa").value;
    let element = document.createElement("li");
    element.innerHTML = inputValue;
    taskList.appendChild(element);
    document.querySelector("#texto-tarefa").value = "";
};

let newTaskButton = document.querySelector("#criar-tarefa");
newTaskButton.addEventListener("click", createTask);