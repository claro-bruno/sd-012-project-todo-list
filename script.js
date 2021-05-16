const btAdd = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const btClear = document.querySelector('#apaga-tudo');
const btClearDone = document.querySelector('#remover-finalizados');
const btSaveList = document.querySelector('#salvar-tarefas');
const btMoveUp = document.querySelector('#mover-cima');
const btMoveDown = document.querySelector('#mover-baixo');

function addTaskList() {
  btAdd.addEventListener('click', () => {
    if (inputTask.value !== '') {
      const newItem = document.createElement('li');
      newItem.innerHTML = inputTask.value;
      newItem.classList.add('tasks');
      ol.appendChild(newItem);
      inputTask.value = '';
    }
  });
}
addTaskList();

function enterNewTask() {
  inputTask.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      btAdd.click();
    }
  });
}
enterNewTask();

function paintTask() {
  const itemSelected = document.querySelectorAll('.tasks');
  for (let index = 0; index < itemSelected.length; index += 1) {
    if (itemSelected[index].classList.contains('selected')) {
      itemSelected[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      itemSelected[index].style.backgroundColor = 'white';
    }
  }
}

function selectItem() {
  ol.addEventListener('click', (event) => {
    const itemSelected = document.querySelector('.selected');
    if (itemSelected !== null) {
      itemSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
    paintTask();
  });
}
selectItem();

function strikethroughItem() {
  ol.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
strikethroughItem();

function clearTaskList() {
  btClear.addEventListener('click', () => {
    const olChildrens = document.querySelector('#lista-tarefas');
    while (olChildrens.hasChildNodes()) {
      olChildrens.removeChild(olChildrens.firstChild);
    }
  });
}
clearTaskList();

function rmItemSelected() {
  btClearDone.addEventListener('click', () => {
    const completedList = document.querySelectorAll('.completed');

    for (let index = 0; index < completedList.length; index += 1) {
      completedList[index].parentNode.removeChild(completedList[index]);
    }
  });
}
rmItemSelected();

function saveList() {
  btSaveList.addEventListener('click', () => {
    localStorage.setItem('tarefas-salvas', ol.innerHTML);
  });
}
saveList();

function moveUp() {
  btMoveUp.addEventListener('click', () => {
    const itemSelected = document.querySelector('.selected');
    if (itemSelected !== null) {
      if (itemSelected !== ol.firstChild) {
        const irmaoPrevious = document.querySelector('.selected').previousSibling;
        irmaoPrevious.insertAdjacentElement('beforebegin', itemSelected);
      } else {
        alert(`${itemSelected.innerHTML} já está na primeira posição 😉️`);
      }
    } else {
      return alert('Ops! Você esqueceu de selecionar um ítem, selecione e tente novamente 😉️');
    }
  });
}
moveUp();

function moveDown() {
  btMoveDown.addEventListener('click', () => {
    const itemSelected = document.querySelector('.selected');
    if (itemSelected !== null) {
      if (itemSelected !== ol.lastChild) {
        const irmaoSelect = document.querySelector('.selected').nextSibling;
        irmaoSelect.insertAdjacentElement('afterend', itemSelected);
      } else {
        alert(`${itemSelected.innerHTML} já está na última posição 😉️`);
      }
    } else {
      return alert('Ops! Você esqueceu de selecionar um ítem, selecione e tente novamente 😉️');
    }
  });
}
moveDown();

// 1.: capturar botão com o id Remover selecionado.
const btRmSelected = document.querySelector('#remover-selecionado');

// 2.: colocar um escutador de eventos de click no botão.
btRmSelected.addEventListener('click', () => {
  // 3.: Capturar o item selecionado.
  const itemSelected = document.querySelector('.selected');
  // 3.1.: Criar uma condição: Se item selecionado existir remova ele, se não existir exiba uma alerta dizendo selecione um item.
  if (itemSelected !== null) {
    // 4.: acessar o elemento pai e remover o filho que capturamos no terceiro passo.
    itemSelected.remove();
  } else {
    alert('Ops! Você esqueceu de selecionar um ítem, selecione e tente novamente 😉️');
  }
});

window.onload = () => {
  const teste = localStorage.getItem('tarefas-salvas');
  ol.innerHTML = teste;
};
