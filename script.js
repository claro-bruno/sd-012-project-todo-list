const tarefaNova = document.querySelector('#texto-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');
const botaoAddTarefa = document.querySelector('#criar-tarefa');

function addTarefa() {
    if (tarefaNova.value.length > 0) {
        const tarefaAdicionada = document.createElement('li');
        tarefaAdicionada.innerText = tarefaNova.value;
        listaDeTarefas.appendChild(tarefaAdicionada);
        tarefaNova.value = '';
    }
}

botaoAddTarefa.addEventListener('click', addTarefa);

function alteraCor(event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
}

listaDeTarefas.addEventListener('dblclick', alteraCor);