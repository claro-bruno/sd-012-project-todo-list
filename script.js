
//armazenando elementos uteis em variaveis
let listaTarefas = document.getElementById('lista-tarefas');
let botaoCriarTarefa = document.getElementById('criar-tarefa');
let elementoInput = document.getElementById('texto-tarefa');

//criando uma div para guardar texto do botão
let divBotao = document.createElement('div');
botaoCriarTarefa.appendChild(divBotao);
divBotao.id = 'texto-botao'
divBotao.innerHTML = 'Adicionar'

//REQUISITO 5 e 6
//função que cria event listener no botao, adiciona value na lista e limpa input

function criaEventoBotao() {
    botaoCriarTarefa.addEventListener('click', function() {
        let novoLi = document.createElement('li');
        listaTarefas.appendChild(novoLi);
        novoLi.innerHTML = elementoInput.value;
        elementoInput.value = '';
    });
};

criaEventoBotao();