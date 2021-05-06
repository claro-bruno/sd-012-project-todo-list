const tarefaNova = document.querySelector('#texto-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');
const botaoAddTarefa = document.querySelector('#criar-tarefa');
const botaoApagaTudo = document.querySelector('#apaga-tudo');
const botaoApagaFinalizadas = document.querySelector('#remover-finalizados');
const botaoApagaSelecionado = document.querySelector('#remover-selecionado');

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
    if (document.querySelector('.selected') === null) {
    event.target.classList.add('selected');
    document.querySelector('.selected').style.backgroundColor = 'rgb(128,128,128)';
    } else {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
    document.querySelector('.selected').style.backgroundColor = 'rgb(128,128,128)';
    }
}

listaDeTarefas.addEventListener('click', alteraCor);

function riscaTarefa(event) {
    if (event.target.classList.contains('completed') !== true) {
        event.target.classList.add('completed');
        event.target.style.textDecoration = 'line-through';
    } else {
        event.target.classList.remove('completed');
        event.target.style.textDecoration = 'none';
    }
}

listaDeTarefas.addEventListener('dblclick', riscaTarefa);

function apagarTudo() {
    let tarefas = document.querySelectorAll('li');
    for (let index = 0; index < tarefas.length; index += 1) {
        listaDeTarefas.removeChild(tarefas[index]);
    }
}

botaoApagaTudo.addEventListener('click', apagarTudo);

function apagarFinalizados() {
    let finalizados = document.querySelectorAll('.completed');
    for (let index = 0; index < finalizados.length; index += 1) {
        listaDeTarefas.removeChild(finalizados[index]);
    }
}

botaoApagaFinalizadas.addEventListener('click', apagarFinalizados);

function apagarSelecionado() {
    listaDeTarefas.removeChild(document.querySelector('.selected'));
}

botaoApagaSelecionado.addEventListener('click', apagarSelecionado);
