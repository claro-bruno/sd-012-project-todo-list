let listaDeItem = document.getElementById("lista-tarefas");
let botaoAdicionarTarefa = document.getElementById("criar-tarefa");
let apagaTudo = document.getElementById("apaga-tudo");


function createTask() {
    let tarefa = document.getElementById("texto-tarefa");
    let itemDaLista = document.createElement('li');
    itemDaLista.innerHTML = tarefa.value;
    if (tarefa.value !== null) {
        listaDeItem.appendChild(itemDaLista);
    }
    tarefa.value = '';
}

function completeTask() {
    if (event.target.id != 'lista-tarefas' && event.target.id != 'items-tarefa') {
        event.target.classList.contains('completed') ? event.target.classList.remove('completed') : event.target.classList.add("completed");
    }
}

function limpaLista() {
    while (listaDeItem.firstChild) {
        listaDeItem.removeChild(listaDeItem.firstChild);
    };
};

botaoAdicionarTarefa.addEventListener("click", createTask)


listaDeItem.addEventListener('dblclick', completeTask);

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

apagaTudo.addEventListener('click', limpaLista);