// Requisito 02 
let funcionamento = document.createElement('p');
funcionamento.setAttribute('id', 'funcionamento');
document.body.appendChild(funcionamento);
funcionamento.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo'

//Requisito 03
let textoTarefa = document.createElement('input');
textoTarefa.setAttribute('id', 'texto-tarefa');
document.body.appendChild(textoTarefa);

//Requisito 04
let listaTarefas = document.createElement('ol');
listaTarefas.setAttribute('id', 'lista-tarefas');
document.body.appendChild(listaTarefas);