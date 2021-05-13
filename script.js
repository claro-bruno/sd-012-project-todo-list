/* eslint-disable prefer-arrow-callback */
let orderedList = document.querySelector('#lista-tarefas');

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
  orderedList.addEventListener('click', function (event) {
    const selected = event.target;
    selected.classList.add('selected');
    orderedList.addEventListener('click', function (event) {
      const selected2 = event.target;
      selected2.classList.add('selected');
      selected.classList.remove('selected');
    });
  });
}

function completed() {
  orderedList.addEventListener('dblclick', function (event) {
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

function upList() {
  const itemSelected = document.querySelector('.selected');
  const previousSibling = itemSelected.previousElementSibling;
  if (itemSelected != null && previousSibling != null) {
    orderedList.insertBefore(itemSelected, previousSibling);
  }
}

function downList() {
  const itemSelected = document.querySelector('.selected');
  const nextSibling = itemSelected.nextElementSibling;
  if (itemSelected != null && nextSibling != null) {
    nextSibling.insertAdjacentElement('afterend', itemSelected);
  }
}

window.onload = function () {
  const savedList = localStorage.getItem('userList');
  if (savedList !== null) {
    orderedList.innerHTML = savedList;
  }
};

function deleteSelected() {
  const itemSelected = document.querySelector('.selected');
  itemSelected.outerHTML = '';
}

addBackgroundColor();
completed();
