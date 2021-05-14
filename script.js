const taskList = document.getElementById("lista-tarefas");
const criarTarefa = document.getElementById("criar-tarefa");
const conteudoInput = document.getElementById("texto-tarefa");
const li = document.querySelector(".listItem");

//criando item da lista
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

function btnClearAll() {
    const clearButton = document.getElementById("apaga-tudo");
    clearButton.addEventListener("click", function() {
        taskList.remove(li);
    });
};
btnClearAll();
