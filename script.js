let taskList = document.getElementById("lista-tarefas");
const criarTarefa = document.getElementById("criar-tarefa");
const conteudoInput = document.getElementById("texto-tarefa");
const listContainer = document.querySelector("#list-container");


// Criando item da lista
function createListItem() {
    criarTarefa.addEventListener("click", function(event) {
        let newListItem = document.createElement("li");
        newListItem.classList.add("listItem");
        newListItem.innerHTML = conteudoInput.value;
        taskList.appendChild(newListItem);
        conteudoInput.value = "";
        console.log(taskList);
    });
};
createListItem();

// Adiciona classe selected
function selectItem() {
    taskList.addEventListener("click", function(event) {
        const itemList = document.querySelector(".selected");
        if (itemList != null) {
            itemList.classList.remove('selected');
        }
        event.target.classList.add("selected");
    });
};
selectItem();

// Adiciona classe completed
function completedStatus() {
    taskList.addEventListener("dblclick", function(event) {
        if (event.target.id !== taskList) {
            if (event.target.classList.contains('completed')) {
                event.target.classList.remove('completed');
            } else { 
                event.target.classList.add('completed'); 
            };
        };
    });
};
completedStatus();

// Apaga a lista
function btnClearAll() {
    const clearButton = document.getElementById("apaga-tudo");
    clearButton.addEventListener("click", function() {
        const li = document.querySelectorAll(".listItem");
        for (let index = 0; index < li.length; index += 1) {
            taskList.removeChild(li[index]);
        };
    });
};
btnClearAll();

// Adiciona remover finalizados
function btnRemoveCompleted() {
    const removeButton = document.getElementById("remover-finalizados");
    removeButton.addEventListener("click", function() {
        const li = document.querySelectorAll(".completed");
        for (let index = 0; index < li.length; index += 1) {
            taskList.removeChild(li[index]);
        };
    });
};
btnRemoveCompleted();

// salvar tarefas
function saveTasks() {
    const saveButton = document.getElementById("salvar-tarefas");
    saveButton.addEventListener("click", function() {
        let li = document.querySelectorAll(".listItem");
        let liArray = [];
        for (let index = 0; index < li.length; index += 1) {
            liArray.push(li[index].innerHTML);
        };
        localStorage.setItem("list2", liArray.join(","));
    });
};
saveTasks();

function getSavedTasks() {    
    let savedItens = localStorage.getItem("list2");
    if (savedItens !== null) {
        let savedItensArray = savedItens.split(",");
        for (let index = 0; index < savedItensArray.length; index += 1) {
            let newListItem = document.createElement("li");
            taskList.appendChild(newListItem);
            newListItem.innerHTML = savedItensArray[index];
        };
    };
};
getSavedTasks();