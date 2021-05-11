const taskList = document.getElementById("lista-tarefas");
const criarTarefa = document.getElementById("criar-tarefa");
const conteudoInput = document.getElementById("texto-tarefa");
const formInput = document.getElementById("form");

function createListItem() {
    criarTarefa.addEventListener("click", function() {
        let newListItem = document.createElement("li");
        newListItem.className = "listItem";
        newListItem.innerHTML = conteudoInput.value;
        taskList.appendChild(newListItem);
        conteudoInput.value = '';
        console.log(taskList);
    });
};
createListItem();