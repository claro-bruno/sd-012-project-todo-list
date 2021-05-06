let inputTarefa = document.querySelector('#texto-tarefa')
let botaoTarefa = document.querySelector('#criar-tarefa');
let listaTarefas = document.querySelector('#lista-tarefas')

botaoTarefa.addEventListener('click', function() {
    let novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = inputTarefa.value;
    listaTarefas.appendChild(novaTarefa);
    inputTarefa.value = '';
})
