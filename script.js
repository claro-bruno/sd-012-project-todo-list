/* eslint-disable prefer-arrow-callback */
const listPlace = document.querySelector('#list-place');
const orderedList = document.querySelector('#lista-tarefas');

function makeList() {
  const li = document.createElement('li');
  const userTask = document.getElementById('texto-tarefa').value;
  const listItem = document.createTextNode(userTask);
  li.appendChild(listItem);
  if (userTask === '') {
    alert('Escreva uma tarefa!');
  } else {
    document.getElementById('lista-tarefas').appendChild(li);
  }
  document.getElementById('texto-tarefa').value = '';
}

function addBackgroundColor() {
  listPlace.addEventListener('click', function (event) {
    const selected = event.target;
    selected.style.backgroundColor = 'rgb(128, 128, 128)';
    listPlace.addEventListener('click', function (event) {
      const selected2 = event.target;
      selected2.style.backgroundColor = 'rgb(128, 128, 128)';
      selected.style.backgroundColor = 'white';
    });
  });
}
function completed() {
  listPlace.addEventListener('dblclick', function (event) {
    const itemCompleted = event.target;
    itemCompleted.classList.toggle('completed');
  });
}

function deleteAll() {
  orderedList.innerHTML = '';
}

function deleteCompleted() {
  const completedItens = document.getElementsByClassName('completed');
  while (completedItens[0]) {
    completedItens[0].parentNode.removeChild(completedItens[0]);
  }
}

function saveUserList() {
  localStorage.setItem('userList', orderedList.innerHTML);
}

window.onload = function () {
  const savedList = localStorage.getItem('userList');
  if (savedList !== null) {
    orderedList.innerHTML = savedList;
  }
};

addBackgroundColor();
completed();
