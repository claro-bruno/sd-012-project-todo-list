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

// ==> Seleciona a lista ordenada

function clikColor(event) {
  const liTaskItem = document.querySelector('.selected');
  if (liTaskItem !== null) {
    liTaskItem.classList.remove('selected');
  } else {
    event.target.classList.add('selected');
  }
}
taskList.addEventListener('click', clikColor);

// ==> Apaga tudo!!!

const deleteAll = document.querySelector('#apaga-tudo');
deleteAll.addEventListener('click', function ()  {
  let itensLista = document.querySelector('#lista-tarefas');
  itensLista.innerText = '';
});



/* última atualização
    const deleteSelect = document.querySelector('#remover-finalizados');

    deleteSelect.addEventListener('click', function () {
      const deletarLista = document.querySelector('.task-item');
      if (deletarLista == 'selected') {
        taskList.removeChild(selected);
        errorMessage.innerText = '';
      } else {
        errorMessage.innerText = 'Nenhuma tarefa selecionada';
      }
    });
*/


const deleteSelect = document.querySelector('#remover-finalizados');
deleteSelect.addEventListener('click', function ()  {
  let deletar = document.querySelectorAll('.task-item');

  for (let i = 0; i < deletar.length; i += 1) {
    if (deletar[i].classList.contains('completed')) {
      deletar[i].remove();
    }
  }
});
