//Após estudar o repositório dos meus colegas de trybe Gabriel Bueno, Luciano Almeida e David Gonzaga decidi reescrever meu projeto do 0 tentando criar um código mais limpo e organizado.

const catchAddButton = document.getElementById('criar-tarefa');
const catchInput = document.getElementById('texto-tarefa');
const catchOl = document.getElementById('lista-tarefas');
const catchTasks = document.getElementsByClassName('task')

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
    if (document.querySelector('.selected') === null) {
      console.log(document.querySelector('.selected'));
      event.target.classList.add('selected');
    } else {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    }
}

catchOl.addEventListener('click', addSelected);








