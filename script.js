function eventSelected(e) {
    let selected = document.querySelector('.selected')
    if(selected !== null) {
        selected.classList.remove('selected');
        e.target.classList.add('selected');
    } else {
        e.target.classList.add('selected');
    };
};

function eventCompleted(e) {
    e.target.classList.toggle('completed');
};

function taskGenerator(taskString, taskStatus) {
    let taskList = document.querySelector("#lista-tarefas");
    let taskItem = document.createElement('li');
    taskItem.innerHTML = taskString;
    taskItem.classList.add('tarefa');
    if(taskStatus === "finalizado") {
        taskItem.classList.add("completed")
    };
    taskItem.addEventListener("click", eventSelected);
    taskItem.addEventListener('dblclick', eventCompleted);
    taskList.appendChild(taskItem);
};

function rmBtn() {
    let taskList = document.querySelector("#lista-tarefas");
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    };
};

function rmCompBtn() {
    let completed = document.querySelectorAll(".completed");
    for(index = 0; index < completed.length; index += 1) {
        completed[index].remove();
    };
};

function rmBtnSelected() {
    let selectedTask = document.querySelector('.selected');
    selectedTask.remove();
};

function saveTasks() {
    let taskList = document.querySelectorAll('.tarefa');
    let taskStorage = {
    }
    for (let index = 0; index < taskList.length; index += 1) {
        let taskItemContent = taskList[index].innerHTML;
        let taskItem = taskList[index];
        let statusTaskItem = null;
        if(taskItem.classList.contains("completed")) {
            statusTaskItem = "finalizado";
        } else {
            statusTaskItem = "não finalizado";
        };
        taskStorage[taskItemContent] = statusTaskItem;
    };
    localStorage.setItem("savedTasks", JSON.stringify(taskStorage));
};

function getSavedTasks() {
    let taskStorage = JSON.parse(localStorage.getItem("savedTasks"));
    for(let key in taskStorage) {
        taskGenerator(key, taskStorage[key]);
    };
};

window.onload = () => {
    let inputSection = document.querySelector("#texto-tarefa");

    document.querySelector("#criar-tarefa").addEventListener ("click", () => {
        taskGenerator(inputSection.value);
        inputSection.value = null;
    });
    document.querySelector("#apaga-tudo").addEventListener('click', rmBtn);
    document.querySelector("#remover-finalizados").addEventListener('click', rmCompBtn);
    document.querySelector("#remover-selecionado").addEventListener('click', rmBtnSelected);
    document.querySelector("#salvar-tarefas").addEventListener('click', saveTasks);
    getSavedTasks();
};