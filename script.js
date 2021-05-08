//Após estudar o repositório dos meus colegas de trybe Gabriel Bueno, Luciano Almeida e David Gonzaga decidi reescrever meu projeto do 0 tentando criar um código mais limpo e organizado.

const catchAddButton = document.getElementById('criar-tarefa');
const catchInput = document.getElementById('texto-tarefa');
const catchOl = document.getElementById('lista-tarefas');

function addTask () {
  if (catchInput.value.length === 0) {
    alert('Adicione uma tarefa');
  } else {
    const newLi = document.createElement('li');
    newLi.innerHTML = catchInput.value;
    catchOl.appendChild(newLi);
  }
  catchInput.value = '';
}

catchAddButton.addEventListener('click', addTask);
catchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
})
