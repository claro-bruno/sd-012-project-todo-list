const tarefaNova = document.querySelector('#texto-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');
const botaoAddTarefa = document.querySelector('#criar-tarefa');
const botaoApagaTudo = document.querySelector('#apaga-tudo');
const botaoApagaFinalizadas = document.querySelector('#remover-finalizados');
const botaoApagaSelecionado = document.querySelector('#remover-selecionado');
const botaoCima = document.querySelector('#mover-cima');
const botaoBaixo = document.querySelector('#mover-baixo');

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

function moverParaCima () {
    let selecionado = document.querySelector('.selected');
    let anterior = selecionado.previousSibling;
    let classesSelecionado = selecionado.className;
    let classesDeCima = anterior.className;
    let conteudoSelecionado = selecionado.innerHTML;
    let conteudoDeCima = anterior.innerHTML;
    let estiloTextoSelecionado = selecionado.style.textDecoration;
    let estiloTextoDeCima = anterior.style.textDecoration;
    selecionado.className = classesDeCima;
    anterior.className = classesSelecionado;
    selecionado.innerHTML = conteudoDeCima;
    anterior.innerHTML = conteudoSelecionado;
    selecionado.style.textDecoration = estiloTextoDeCima;
    anterior.style.textDecoration = estiloTextoSelecionado;
    if (anterior.classList.contains('selected') === true) {
        anterior.style.backgroundColor = 'rgb(128, 128, 128)';
        selecionado.style.backgroundColor = 'white';
    }
}

botaoCima.addEventListener('click', moverParaCima);

function moverParaBaixo () {
    let selecionado = document.querySelector('.selected');
    let proximo = selecionado.nextSibling;
    let classesSelecionado = selecionado.className;
    let classesDeBaixo = proximo.className;
    let conteudoSelecionado = selecionado.innerHTML;
    let conteudoDeBaixo = proximo.innerHTML;
    let estiloTextoSelecionado = selecionado.style.textDecoration;
    let estiloTextoDeBaixo = proximo.style.textDecoration;
    selecionado.className = classesDeBaixo;
    proximo.className = classesSelecionado;
    selecionado.innerHTML = conteudoDeBaixo;
    proximo.innerHTML = conteudoSelecionado;
    selecionado.style.textDecoration = estiloTextoDeBaixo;
    proximo.style.textDecoration = estiloTextoSelecionado;
    if (proximo.classList.contains('selected') === true) {
        proximo.style.backgroundColor = 'rgb(128, 128, 128)';
        selecionado.style.backgroundColor = 'white';
    }
}

botaoBaixo.addEventListener('click', moverParaBaixo);