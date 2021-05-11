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


listaDeItem.addEventListener('dblclick', () => {
    if (event.target.id != 'lista-tarefas' && event.target.id != 'items-tarefa') {
        event.target.classList.add('completed');
    }
});

listaDeItem.addEventListener("click", () => {

    let tarefas = document.getElementsByTagName('li');

    if (event.target.id != 'lista-tarefas' && event.target.id != "itens-tarefa") {
        for (let index = 0; index < tarefas.length; index++) {
            if (tarefas[index].classList.contains('selected')) {
                tarefas[index].classList.remove('selected');
            };
        };

        event.target.classList.add('selected');
    }
});