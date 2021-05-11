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

listaDeItem.addEventListener("click", () => {
    if (event.target.id != 'lista-tarefas' && event.target.id != "itens-tarefa") {
        event.target.style.backgroundColor = "rgb(128, 128, 128)";
    }
});
