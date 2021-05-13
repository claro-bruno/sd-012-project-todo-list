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
    listaTarefas.appendChild(listItem);
    listItem.innerText = textoTarefa.value;
    textoTarefa.value = '';
    console.log(listaTarefas.innerText);
})

