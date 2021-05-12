const taskList = document.getElementById("lista-tarefas");
const criarTarefa = document.getElementById("criar-tarefa");
const conteudoInput = document.getElementById("texto-tarefa");
const itemList = document.querySelector(".selected");
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
    li.addEventListener("click", function(event) {
        if (itemList.className === "selected") {
            itemList.classList.remove('selected');
        }
        event.target.classList.add("selected");
    })
};
