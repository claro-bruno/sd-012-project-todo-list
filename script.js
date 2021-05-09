//Após estudar o repositório dos meus colegas de trybe Gabriel Bueno, Luciano Almeida e David Gonzaga decidi reescrever meu projeto do 0 tentando criar um código mais limpo e organizado.

const catchAddButton = document.getElementById('criar-tarefa');
const catchInput = document.getElementById('texto-tarefa');
const catchOl = document.getElementById('lista-tarefas');
const catchTasks = document.getElementsByClassName('task');
const catchSelected = document.querySelector('.selected');

function addTask () {
  if (catchInput.value.length === 0) {
    alert('Adicione uma tarefa');
  } else {
    const newLi = document.createElement('li');
    newLi.innerHTML = catchInput.value;
    newLi.classList.add('task')
    catchOl.appendChild(newLi);
  }
  catchInput.value = '';
}

catchAddButton.addEventListener('click', addTask);
catchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
})

function addSelected(event) {
  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected');
  } else {
    for (let index = 0; index < catchTasks.length; index += 1) {
      catchTasks[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

catchOl.addEventListener('click', addSelected);