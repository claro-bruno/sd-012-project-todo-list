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

function taskGenerator(taskString) {
    let taskList = document.querySelector("#lista-tarefas");
    let taskItem = document.createElement('li');
    taskItem.innerHTML = taskString;
    taskItem.classList.add('tarefa');
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

function rmCompBtn () {
    let completed = document.querySelectorAll(".completed");
    for(index = 0; index < completed.length; index += 1) {
        completed[index].remove();
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
};