const toDoList = [''];

const textInput = document.querySelector('#texto-tarefa');

const buttonCreate = document.querySelector('.submit');

buttonCreate.addEventListener('click', function () {
  let catOl = document.getElementById('lista-tarefas');
  const text = textInput.value;
  const createLi = document.createElement('li');
  createLi.className = 'unselected';
  createLi.innerHTML = text;
  catOl.appendChild(createLi);
  document.getElementById('texto-tarefa').value = null;
});


let buttonRemove = document.getElementById('apaga-tudo')
let removeAll = document.getElementById('lista-tarefas');
buttonRemove.addEventListener('click', function() {
    removeAll.innerHTML = '';
})