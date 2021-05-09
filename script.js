let listaDeItem = document.getElementById("lista-tarefas");
let botaoAdicionarTarefa = document.getElementById("criar-tarefa");

function createTask() {
    let tarefa = document.getElementById("texto-tarefa");
    let itemDaLista = document.createElement('li');
    itemDaLista.innerHTML = tarefa.value;
    if (tarefa.value !== null) {
        listaDeItem.appendChild(itemDaLista);
    }
    tarefa.value = '';

}

botaoAdicionarTarefa.addEventListener("click", createTask)