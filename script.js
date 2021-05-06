let addButton = document.getElementById("criar-tarefa");
let taskList = document.getElementById("lista-tarefas");
let inputText = document.getElementById("texto-tarefa");

addButton.addEventListener("click", function () {
    let createList = document.createElement("li");
    createList.classList.add("create-list");
    createList.innerText = inputText.value;
    inputText.value = "";
    taskList.appendChild(createList);
    }); 