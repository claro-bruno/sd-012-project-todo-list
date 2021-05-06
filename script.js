
//armazenando elementos uteis em variaveis//
let listaTarefas = document.getElementById('lista-tarefas');
let botaoCriarTarefa = document.getElementById('criar-tarefa');
let elementoInput = document.getElementById('texto-tarefa');

//criando uma div para guardar texto do botao//
let divBotao = document.createElement('div');
botaoCriarTarefa.appendChild(divBotao);
divBotao.id = 'texto-botao'
divBotao.innerHTML = 'Adicionar'

//REQUISITO 5 e 6//
//função que cria event listener no botao, adiciona value na lista e limpa input//

function criaEventoBotao() {
    botaoCriarTarefa.addEventListener('click', function() {
        let novoLi = document.createElement('li');
        listaTarefas.appendChild(novoLi);
        novoLi.className = 'item-lista';
        novoLi.innerHTML = elementoInput.value;
        elementoInput.value = '';
    });
};

criaEventoBotao();

//REQUISITO 7 e 8//

function mudaCorItem() {
    let listaTarefas = document.getElementById('lista-tarefas');
    let listaLis = document.getElementsByClassName('item-lista');
    listaTarefas.addEventListener('click', function(event) {
        for (index = 0; index < listaLis.length; index += 1){
            listaLis[index].style.backgroundColor = '';
        }
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        });
};

mudaCorItem();

//REQUISITO 9//

//função para riscar elemento com double-click e des-riscar com double-click//

function riscaItem() {
    let listaTarefas = document.getElementById('lista-tarefas');
    let listaLis = document.getElementsByClassName('item-lista');
    listaTarefas.addEventListener('dblclick', function(event) {
        if (event.target.className === 'item-lista completed'){
            event.target.className = 'item-lista';
        }else{
            event.target.className = 'item-lista completed'
        };
    });
};

riscaItem();