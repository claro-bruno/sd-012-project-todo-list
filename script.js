const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const eraseAll = document.querySelector('#apaga-tudo');
const eraseCompleted = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const lastList = JSON.parse(localStorage.getItem('taskList'));
const lastStyle = JSON.parse(localStorage.getItem('taskListStyle'));

function rememberList() {
  if (lastList !== null) { 
    for (let indexRemember = 0; indexRemember < lastList.length; indexRemember += 1) {
      const rememberItem = document.createElement('li');
      rememberItem.innerHTML = lastList[indexRemember];
      rememberItem.addEventListener('click', changeSelected);
      rememberItem.addEventListener('click', changeBgColor);
      rememberItem.addEventListener('dblclick', completedTasks);
      rememberItem.className = lastStyle[indexRemember];
      list.appendChild(rememberItem);
    }
  }
}

rememberList();

function changeBgColor(event) {
  let target = event.target;
  event.target.classList.add('selected');
}

function changeSelected() {
// Utilizei a dica da colega Adriana Biberg para implementar esta checagem utilizando for e if.
  for (let index = 0; index < list.children.length; index += 1) {
    if (list.children[index].className.includes('selected')) {
      list.children[index].classList.remove('selected');
      list.children[index].style.backgroundColor = '';
    }
  }
}

function completedTasks(event) {
  if (event.target.className.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function createItem() {
  const newItem = document.createElement('li');
  newItem.addEventListener('click', changeSelected);
  newItem.addEventListener('click', changeBgColor);
  newItem.addEventListener('dblclick', completedTasks);
  newItem.innerHTML = input.value;
  list.appendChild(newItem);
  input.value = '';
}

button.addEventListener('click', createItem);

function eraseAllTasks() {
  for (let indexErase = list.children.length - 1; indexErase >= 0; indexErase -= 1) {
    list.removeChild(list.children[indexErase]);
  }
}

eraseAll.addEventListener('click', eraseAllTasks);

function eraseCompletedTasks() {
  for (let indexCompleted = list.children.length - 1; indexCompleted >= 0; indexCompleted -= 1) {
    if (list.children[indexCompleted].className.includes('completed')) {
      list.removeChild(list.children[indexCompleted]);
    }
  }
}

eraseCompleted.addEventListener('click', eraseCompletedTasks);

function saveTasks() {
  const arrayList = [];
  for (let indexStorage = 0; indexStorage < list.children.length; indexStorage += 1) {
    arrayList.push(list.children[indexStorage].innerHTML);
  }
  localStorage.setItem('taskList', JSON.stringify(arrayList));
}

function saveStyle() {
  const arrayStyle = [];
  for (let indexStyle = 0; indexStyle < list.children.length; indexStyle += 1) {
    arrayStyle.push(list.children[indexStyle].className);
  }
  localStorage.setItem('taskListStyle', JSON.stringify(arrayStyle));
}

saveButton.addEventListener('click', saveTasks);
saveButton.addEventListener('click', saveStyle);
