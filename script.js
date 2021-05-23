const elementoLista = document.querySelector('#lista-tarefas');
const elementoInput = document.querySelector('#texto-tarefa');
const elementoBotao = document.querySelector('#criar-tarefa');

const tarefas = [];

function mostraTarefas (){

  elementoLista.innerHTML = '';

  for(tarefa of tarefas){
    const elementoTarefa = document.createElement('li');
    const textoTarefa = document.createTextNode(tarefa);

    elementoTarefa.appendChild(textoTarefa);
    elementoLista.appendChild(elementoTarefa)
  }
}

mostraTarefas()

function addTarefa(){
  const textoTarefa = elementoInput.value;
  tarefas.push(textoTarefa);
  elementoInput.value = '';

  mostraTarefas();
}

elementoBotao.setAttribute('onclick', 'addTarefa()');