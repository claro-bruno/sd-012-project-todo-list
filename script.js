function tarefas() {

    //Puxando Id da tag <ol id="lista-tarefas"></ol>
    const getTarefas = document.getElementById('lista-tarefas');

    //Puxando Id da tag <input id="texto-tarefa">
    const getInputText = document.getElementById('texto-tarefa');

    //Coloca o valor do input em uma nova variavel
    const getNovoValor = getInputText.value;

    //Cria nova tag <li></li>
    const novaTarefa = document.createElement('li');

    //Tag <li></li> recebe a nova tarefa (innerHTML); <li>Git</li>
    novaTarefa.innerHTML = getNovoValor;

    //Tag <li>Git</li> adiciona a classe 'tarefa'; <li class="tarefa">Git</li>
    novaTarefa.classList.add('tarefa');

    /*Adiciona <li class="tarefa">Git</li> como filho na   
    <ol id="lista-tarefas">  
    <li class="tarefa">Git</li>
    </ol>*/
    getTarefas.appendChild(novaTarefa);

    //Cria variavel para limpar o input
    const limparInput = '';

    //Limpa o valor do input 
    getInputText.value = limparInput;
}

//Adiciona o Evento de Click ao botão que roda a função acima
document.addEventListener('click', (event) => {
    if (event.target.id === 'criar-tarefa') {
        tarefas();
    }
});

const list = document.querySelector('#lista-tarefas');

function grayColor() {
    const tarefaSelected = document.querySelectorAll('.tarefa');
    for (let index = 0; index < tarefaSelected.length; index += 1) {
        if (tarefaSelected[index].classList.contains('selected')) {
            tarefaSelected[index].style.backgroundColor = 'rgb(128, 128, 128)';
        } else {
            tarefaSelected[index].style.backgroundColor = 'white';
        }
    }
}

function selectTarefa() {
    list.addEventListener('click', (event) => {
        const tarefaSelected = document.querySelector('.selected');
        if (tarefaSelected !== null) {
            tarefaSelected.classList.remove('selected');
        }
        event.target.classList.add('selected');
        grayColor();
    });
}

selectTarefa();
// https://www.w3schools.com/jsref/prop_style_textdecoration.asp
function riscadoStyle() {
    const tarefaRiscada = document.querySelectorAll('.tarefa');
    for (let index = 0; index < tarefaRiscada.length; index += 1) {
        if (tarefaRiscada[index].classList.contains('completed')) {
            tarefaRiscada[index].style.textDecoration = 'line-through solid black';
        } else {
            tarefaRiscada[index].style.textDecoration = '';
        }
    }
}

riscadoStyle();

function riscarTarefa() {
    list.addEventListener('dblclick', (event) => {
        event.target.classList.toggle('completed');
        riscadoStyle();
    });
}

riscarTarefa();

const limparButton = document.querySelector('#apaga-tudo');

function limparTarefa() {
    limparButton.addEventListener('click', () => {
        const tarefasNaLista = document.querySelector('#lista-tarefas');
        while (tarefasNaLista.hasChildNodes()) {
            tarefasNaLista.removeChild(tarefasNaLista.firstChild);
        }
    });
}

limparTarefa();

const removerButton = document.querySelector('#remover-finalizados');

removerButton.addEventListener('click', () => {
    const listFinished = document.querySelectorAll('.completed');

    for (let index = 0; index < listFinished.length; index += 1) {
        listFinished[index].parentNode.removeChild(listFinished[index]);
    }
});