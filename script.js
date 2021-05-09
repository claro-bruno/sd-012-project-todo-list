const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// ==> Gera a lista ordenada
button.addEventListener("click", function ()  {
  const createItem = document.createElement('li');
  createItem.className = 'task-item';
  createItem.innerText = input.value;
  taskList.appendChild(createItem);
  input.value = '';
});
// <==

// ==> Risca a lista ordenada
const finish = document.querySelector('#lista-tarefas');
finish.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed')
  } else {
    event.target.classList.add('completed');
  }
});
// <==



// ==> Apaga tudo!!!

const deleteAll = document.querySelector('#apaga-tudo');
deleteAll.addEventListener('click', function ()  {
  let itensLista = document.querySelector('#lista-tarefas');
  itensLista.innerText = '';
});
// <==
// ==> Apaga selecionado
const deleteSelect = document.querySelector('#remover-finalizados');
deleteSelect.addEventListener('click', function ()  {
  const deletar = document.querySelectorAll('.task-item');
  for (let index = 0; index < deletar.length; index += 1) {
    if (deletar[index].classList.contains('completed')) {
      deletar[index].remove();
    }
  }
});
// <==


// ==> Marca selecionado
document.addEventListener('click', function clickedTask(event)
{
  const selecionados = document.getElementsByClassName('task-item');
  const greyTask = event.target;
  for (let index = 0; index < selecionados.length; index += 1)
  {
    selecionados[index].classList.remove('selected');
  }
  if (greyTask.classList.contains('selected'))
  {
    greyTask.classList.add('selected');
  } else
  {
    greyTask.classList.add('selected');
  }
});
// <==
