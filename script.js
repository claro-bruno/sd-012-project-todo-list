const btAdd = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const btClear = document.querySelector('#apaga-tudo');
const btClearDone = document.querySelector('#remover-finalizados');

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

// Função que aciona nova lista nova tarefa com o enter
function enterNewTask() {
  // capturar o input onde o texto será digitado
  // Usar um escutador de eventos no input do tipo 'keypress' ou 'keyup'
  inputTask.addEventListener('keypress', (event) => {
    // verificar se a tecla precionada foi a tecla 'Enter'
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

// Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
btClearDone.addEventListener('click', () => {
  const completedList = document.querySelectorAll('.completed');

  for (let index = 0; index < completedList.length; index += 1) {
    completedList[index].parentNode.removeChild(completedList[index]);
    console.log('olá');
  }
});

// Local storage - Salva por mais tempo (mesmo que feche a págian)
// Section Storage - Fica salvo enquando a página está aberta

// capturar o botão
const btSaveList = document.querySelector('#salvar-tarefas');

// criar uma function que armazena a lista no local storage
function saveList(event) {
  // Como armazenar um dado no local storage?
  // Adicionar na lista o conteúdo salvo no local storage quando a página for recarregada.
  localStorage.setItem('tarefas-salvas', ol.innerHTML);
  // Adicionar um evento de click

}
btSaveList.addEventListener('click', saveList);

window.onload = () => {
  let teste = localStorage.getItem('tarefas-salvas');
  ol.innerHTML = teste
  console.log(teste);
};
