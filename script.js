
const header = document.createElement('header');
const title = document.createElement('h1');
title.innerHTML = 'Minha Lista de Tarefas';
const main = document.querySelector('main');
const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
main.appendChild(header);
document.querySelector('header').appendChild(title);
main.appendChild(paragraph);

const input = document.createElement('input');
input.id = 'texto-tarefa';
input.value = '';
main.appendChild(input);

const btn1 = document.createElement('button');
btn1.id = 'criar-tarefa';
btn1.innerHTML = 'Adicionar';
main.appendChild(btn1);

const lista = document.createElement('ol');
lista.id = 'lista-tarefas';
main.appendChild(lista);

const buttonClick = document.querySelector('#criar-tarefa');
buttonClick.addEventListener('click', function () {
let valor = document.getElementById('texto-tarefa').value;
  if(valor === '' || valor === ' ') {
    alert('Nenhum texto foi digitado');
  }
  else {
    let item = document.createElement('li');
    item.className = 'item_list';
    item.innerText = valor;
    let list = document.querySelector('#lista-tarefas');
    list.appendChild(item);
    document.getElementById('texto-tarefa').value = '';
    color();
  }
})

function color () {
  let item_list = document.querySelectorAll('.item_list');
  for(let index = 0; index < item_list.length; index += 1) {
    item_list[index].addEventListener('click', background);
    item_list[index].addEventListener('dblclick', completed);
  }
}

function background (e) {
  let rem = document.querySelectorAll('.item_list');
  for(let index = 0; index < rem.length; index += 1) {
    rem[index].classList.remove('selected');
  }
  e.target.classList.add('selected');
}

function completed (e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  }
  else {
    e.target.classList.add('completed');
  }
}

let btnClear = document.createElement('button');
btnClear.innerHTML = 'Limpar Lista';
btnClear.id = 'apaga-tudo';
main.appendChild(btnClear);

const limpar = document.querySelector('#apaga-tudo');
limpar.addEventListener('click', function () {
    let pai = document.querySelector('#lista-tarefas')
    let rem = document.querySelectorAll('.item_list');
    for (let index = 0; index < rem.length; index += 1) {
      pai.removeChild(rem[index])
    }
});

let btnCompl = document.createElement('button');
btnCompl.innerHTML = 'Limpar Completos';
btnCompl.id = 'remover-finalizados';
main.appendChild(btnCompl);

const limparFinalizados = document.querySelector('#remover-finalizados');
limparFinalizados.addEventListener('click', function () {
    let pai = document.querySelector('#lista-tarefas')
    let rem = document.querySelectorAll('.completed');
    for (let index = 0; index < rem.length; index += 1) {
      pai.removeChild(rem[index])
    }
});
