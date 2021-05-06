let tarefaNova = document.querySelector('#texto-tarefa');
let listaDeTarefas = document.querySelector('#lista-tarefas');
let botaoAddTarefa = document.querySelector('#criar-tarefa');
function addTarefa () {
    if (tarefaNova.value.length > 0) {
        let tarefaAdicionada = document.createElement('li');
        tarefaAdicionada.innerText = tarefaNova.value;
        listaDeTarefas.appendChild(tarefaAdicionada);
        tarefaNova.value = '';
    }
}; botaoAddTarefa.addEventListener('click', addTarefa);