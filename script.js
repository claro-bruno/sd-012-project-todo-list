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
    input.value = ' ';
};

function botaoAdd() {
    criaLista();
    limpaInput();
};

button.addEventListener('click', botaoAdd);

