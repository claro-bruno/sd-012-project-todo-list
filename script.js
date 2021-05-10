const input = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const btnX = document.getElementById('apaga-tudo');
const btnXX = document.getElementById('remover-finalizados');
const itemList = document.querySelectorAll('.item-list');
const taskList = document.getElementById('lista-tarefas');
const btnSave = document.getElementById('salvar-tarefas');

function catchInput() {
    btnAdd.addEventListener('click', () => {
      const createLi = document.createElement('li');
      createLi.className = 'item-list';
      createLi.innerHTML = input.value;
      taskList.appendChild(createLi);
      input.value = '';
      selectItem();
    });
  }
  catchInput();
  function selectItem() {
    const itemList = document.querySelectorAll('.item-list');
    for (const item of itemList) {
      item.addEventListener('click', () => {
        for (const item2 of itemList) {
          item2.classList.remove('selected');
        }
        item.classList.add('selected');
      });
    }
  }

  function markAsCompleted(event) {
    if (event.target.classList.contains('completed') !== true) {
      event.target.classList.add('completed');
    } else {
      event.target.classList.remove('completed');
    }
  }
  taskList.addEventListener('dblclick', markAsCompleted);