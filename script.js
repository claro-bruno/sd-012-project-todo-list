const btnCreateTask = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const olTask = document.querySelector('#lista-tarefas');

btnCreateTask.addEventListener('click', () => {
  const liTask = document.createElement('li');
  liTask.innerText = inputTask.value;
  olTask.appendChild(liTask);
  inputTask.value = '';
});

function selectedItemList() {
  olTask.addEventListener('click', (event) => {
    const eventTarget = event.target;
    const selectItem = document.querySelector('.selected');
    if (selectItem) {
      selectItem.classList.remove('selected');
    }
    eventTarget.classList.add('selected');
  });
}
selectedItemList();

function dbclickRisk() {
  olTask.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
dbclickRisk();

const clear = document.querySelector('#apaga-tudo');
function clearAll() {
  clear.addEventListener('click', () => {
    olTask.innerHTML = '';
  });
}
clearAll();

const clearEnd = document.querySelector('#remover-finalizados');
const completed = document.getElementsByClassName('completed');
function deleteEnd() {
  clearEnd.addEventListener('click', () => {
    console.log('complete');
    for (let index = completed.length - 1; index >= 0; index -= 1) {
      completed[index].remove();
    }
  })
}
deleteEnd();

const saveTaskBtn = document.querySelector('#salvar-tarefas');
saveTaskBtn.addEventListener('click', () => {
  localStorage.setItem('tasks', olTask.innerHTML);
});
olTask.innerHTML = localStorage.getItem('tasks'); 

/*const removeSelectedBtn = document.querySelector('#remover-selecionado');
removeSelectedBtn.addEventListener('click', () => {
  const selectItens = document.querySelector('.selected');
  selectItens.remove();*/