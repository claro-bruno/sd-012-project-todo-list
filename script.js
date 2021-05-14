// Requisito 02 
const funcionamento = document.createElement('p');
funcionamento.setAttribute('id', 'funcionamento');
document.body.appendChild(funcionamento);
funcionamento.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';

//Requisito 03
const textoTarefa = document.createElement('input');
textoTarefa.setAttribute('id', 'texto-tarefa');
document.body.appendChild(textoTarefa);

//Requisito 04
const listaTarefas = document.createElement('ol');
listaTarefas.setAttribute('id', 'lista-tarefas');
document.body.appendChild(listaTarefas);

//Requisito 05
const criarTarefa = document.createElement('button');
criarTarefa.setAttribute('id', 'criar-tarefa');
document.body.appendChild(criarTarefa);
criarTarefa.innerText = 'Criar';

criarTarefa.addEventListener('click', function () {
    let listItem = document.createElement('li');
    listItem.innerText = textoTarefa.value;
    textoTarefa.value = '';
    listaTarefas.appendChild(listItem);
    listItem.setAttribute('class', 'item-lista');

})

//Requisito 07
listaTarefas.addEventListener('click', function (event) {
    let itemLista = document.getElementsByClassName('item-lista');
    for (let index = 0; index < itemLista.length; index += 1) {
        itemLista[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
    if (event.target.className === 'item-lista') {
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
})

//Requisito 09
listaTarefas.addEventListener('dblclick', function (event) {
    if (event.target.className === 'item-lista completed') {
        event.target.className = 'item-lista'
    } else {
        event.target.className = 'item-lista completed'
    }
})


