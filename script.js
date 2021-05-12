let input = document.getElementById('texto-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let button = document.getElementById('criar-tarefa');

function criaLista() {
    let funcao = document.createElement('li');
    funcao.classList.add('lista-tarefas');
    funcao.innerHTML = input.value;
    document.querySelector('#lista-tarefas').appendChild(funcao);

};

function limpaInput() {
    input.value = '';
};

function botaoAdd() {
    criaLista();
    limpaInput();
};

button.addEventListener('click', botaoAdd);

function pintaFundoItem(event) {

    let listaSelecionada = document.querySelector('.selected')
    if (listaSelecionada) { 
        listaSelecionada.classList.remove('selected');
        listaSelecionada.style.backgroundColor = '';
    };   

    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
};

function corFundoItem() {
    pintaFundoItem();
};

listaTarefas.addEventListener("click", pintaFundoItem);