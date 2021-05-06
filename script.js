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


/* 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
O que será verificado:

Será verificada a existência de um elemento do tipo button com o id criar-tarefa

No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados. */
/* Credito: https://www.w3schools.com/js/js_input_examples.asp */

function botaoCriarTarefa () {
    let lista = document.getElementById('lista-tarefas');
    let input = document.getElementById('texto-tarefa');
    let botao = document.createElement('button');
    document.body.insertBefore(botao, lista);
    botao.id = 'criar-tarefa';
    botao.innerHTML = 'Criar tarefa'
    botao.addEventListener('click', function (event) {
       if(input.value === '') { 
           alert('Esta vazio!');
       } else {
           let item = document.createElement('li');
           lista.appendChild(item);
           item.innerHTML = input.value;
           input.value = '';
       }
    })
}
botaoCriarTarefa();


/* 6 - Ordene os itens da lista de tarefas por ordem de criação
O que será verificado:

Três itens serão criados na lista e será checado se eles estão ordenados por ordem de criação - ou seja, primeiro o primeiro item criado, depois o segundo, e assim por diante.
 */
/* function bubbleSort(array) {
    for (let bubble = 0; bubble < array.length - 1; bubble += 1) {
      for (let index = 0; index < array.length - bubble - 1; index += 1) {
        if (array[index] > array[index + 1]) {
          [array[index], array[index + 1]] = [array[index + 1], array[index]];
        }
      }
    }
    return array;
}

function ordenaLista () {
    let lista = document.getElementsByTagName('li')
    bubbleSort(lista)
} */
// ordenaLista();
// sera que da pra mudar lista[i] com lista[i+1] etc?

