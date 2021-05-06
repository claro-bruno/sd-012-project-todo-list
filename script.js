/* 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
O que será verificado:

Será verificado se sua página possui uma tag header com o conteúdo Minha Lista de Tarefas */

function adicionaTitulo () {
    let header = document.createElement('header');
    document.body.appendChild(header);
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Minha Lista de Tarefas';
    header.appendChild(h1);
}
adicionaTitulo();


/* 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
O que será verificado:

Será verificado que existe na sua página um elemento com o id funcionamento com o conteúdo Clique duas vezes em um item para marcá-lo como completo */

function adicionaParagrafoFuncionamento () {
    let paragrafo = document.createElement('p');
    document.body.appendChild(paragrafo);
    paragrafo.id = 'funcionamento';
    paragrafo.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
}
adicionaParagrafoFuncionamento();


/* 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista
O que será verificado:

Será verificada a existência de um elemento do tipo input com o id texto-tarefa. */

function inputTextoTarefa () {
    let input = document.createElement('input');
    input.id = 'texto-tarefa';
    document.body.appendChild(input);
}
inputTextoTarefa();


/* 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
O que será verificado:

Será verificada a existência de um elemento ol com o id lista-tarefas.
 */

function adicionaListaTarefas () {
    let lista = document.createElement('ol');
    lista.id = 'lista-tarefas';
    document.body.appendChild(lista);
}
adicionaListaTarefas();