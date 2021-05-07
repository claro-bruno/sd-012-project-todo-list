//Puxar Tarefas Salvas no LocalStorage
function reloadSavedTasks () {
    let tasksInLocalStorage = JSON.parse(localStorage.getItem("tasksSaved"));
    let classesInLocalStorage = JSON.parse(localStorage.getItem("classesSaved"));

    for (let index = 0; index < tasksInLocalStorage.length; index += 1){
        let taskList = document.querySelector("#lista-tarefas")
        let element = document.createElement("li");
        element.innerHTML = tasksInLocalStorage[index];
        element.className = classesInLocalStorage[index];
        element.addEventListener("click", highlightTask);
        element.addEventListener("dblclick", completeTask);
        taskList.appendChild(element);
    };

};

if (localStorage.length > 0){
    reloadSavedTasks();
}


//Colocar Tarefa Nova na Lista

function createTask() {
    let taskList = document.querySelector("#lista-tarefas")
    let inputValue = document.querySelector("#texto-tarefa").value;
    let element = document.createElement("li");
    element.innerHTML = inputValue;
    element.addEventListener("click", highlightTask);
    element.addEventListener("dblclick", completeTask);
    taskList.appendChild(element);
    document.querySelector("#texto-tarefa").value = "";
};

let newTaskButton = document.querySelector("#criar-tarefa");
newTaskButton.addEventListener("click", createTask);

// Destacar item da lista em cinza

function highlightTask (event){
    let listOfTasks = document.querySelectorAll("#lista-tarefas li");
    
    for(let index = 0; index < listOfTasks.length; index += 1){
        listOfTasks[index].classList.remove("selected");
    };

    event.target.classList.add("selected");
};

// Marcar tarefa como completa

function completeTask (event) {
    if (event.target.classList.contains("completed")) {
        event.target.classList.remove("completed")
    } else {
        event.target.classList.add("completed");
    };
};

// Apagar Lista

function deleteAllList () {
    let allListItens = document.querySelectorAll("#lista-tarefas li");

    for (let index = 0; index < allListItens.length; index += 1) {
        allListItens[index].remove();
    };
};

document.querySelector("#apaga-tudo").addEventListener("click", deleteAllList);

// Apagar Tarefas Completas

function deleteAllCompleteTasks (){
    let allCompletedItens = document.querySelectorAll("#lista-tarefas li.completed");

    for (let index = 0; index < allCompletedItens.length; index += 1) {
        allCompletedItens[index].remove();
    };
};

document.querySelector("#remover-finalizados").addEventListener("click", deleteAllCompleteTasks);

// Salvar Tarefas

function saveTasks () {
    let allTasks = document.querySelectorAll("#lista-tarefas li");
    let arrayOfTasks = [];
    let arrayOfClass = [];

    for (let index = 0; index < allTasks.length; index += 1){
        arrayOfTasks.push(allTasks[index].innerHTML);
        arrayOfClass.push(allTasks[index].className);
    };

    localStorage.setItem("tasksSaved", JSON.stringify(arrayOfTasks));
    localStorage.setItem("classesSaved", JSON.stringify(arrayOfClass));

};

document.querySelector("#salvar-tarefas").addEventListener("click", saveTasks);

// Mover itens da Lista

    // Para Cima

function moveUp () {
    let firstElement = document.querySelector("#lista-tarefas").firstChild;
    let selectedTask = document.querySelector(".selected");
    let previousTask = selectedTask.previousElementSibling;
    let changedContent = previousTask.innerHTML;
    let changedClass = previousTask.className;

    if(selectedTask !== firstElement){
        // Trocar Task Anterior
        previousTask.innerHTML = selectedTask.innerHTML
        previousTask.className = selectedTask.className   
        
        // Trocar conteudo da selected Task
        selectedTask.innerHTML = changedContent;
        selectedTask.className = changedClass;
    };
};

document.querySelector("#mover-cima").addEventListener("click", moveUp);

    // Para Baixo

function moveDown () {
    let lastElement = document.querySelector("#lista-tarefas").lastChild;
    let selectedTask = document.querySelector(".selected");
    let nextTask = selectedTask.nextElementSibling;
    let changedContent = nextTask.innerHTML;
    let changedClass = nextTask.className;

    if(selectedTask !== lastElement){
        // Trocar Task Anterior
        nextTask.innerHTML = selectedTask.innerHTML
        nextTask.className = selectedTask.className   
        
        // Trocar conteudo da selected Task
        selectedTask.innerHTML = changedContent;
        selectedTask.className = changedClass;
    };
};

document.querySelector("#mover-baixo").addEventListener("click", moveDown);

// Remover Tarefa Selecionada

function removeSelectedTask (){
    document.querySelector(".selected").remove();
};

document.querySelector("#remover-selecionado").addEventListener("click",removeSelectedTask);