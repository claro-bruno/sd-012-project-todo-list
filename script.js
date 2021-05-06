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

