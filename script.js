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
        listOfTasks[index].style.backgroundColor = "rgb(255, 255, 255)"
    };

    event.target.style.backgroundColor = "rgb(128, 128, 128)";
};

// Marcar tarefa como completa

function completeTask (event) {
    if (event.target.className === "completed") {
        event.target.className = "";
    } else if(event.target.className === "") {
        event.target.className = "completed";
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
