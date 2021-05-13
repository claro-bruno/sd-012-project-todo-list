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
    selected.classList.add('selected');
    listPlace.addEventListener('click', function (event) {
      const selected2 = event.target;
      selected2.classList.add('selected');
      selected.classList.remove('selected');
    });

  });
}


/*function addBackgroundColor() {
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
*/

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

function upList() {
  const itemSelected = document.querySelector('.selected');
  const previousSibling = itemSelected.previousElementSibling;
  const movedItem = itemSelected;
  orderedList.insertBefore(movedItem, previousSibling);
}

function downList() {
  const itemSelected = document.querySelector('.selected');
  const nextSibling = itemSelected.nextElementSibling;
  const movedItem = itemSelected;
  nextSibling.insertAdjacentElement('afterend', movedItem); 
}

/*
// Get the list you want to work with
var list = document.getElementById("my-list");

// Select all the li elements within that list
var lis = list.getElementsByTagName("li");

// Create a global variable for to store the element you wish to move
var newItem;

// For loop to cycle through all the li elements
for(i=0; i < lis.length; i++) {
  // If the li text is matches what you are looking for
  if (lis[i].innerText == "z - list item") {
    // store the element in newItem variable
    newItem = lis[i];
    // temporarily remove the element
    list.removeChild(lis[i]);
  }
}
// Re-add the element back on to the list
list.appendChild(newItem);

function downList() {

}
*/

window.onload = function () {
  const savedList = localStorage.getItem('userList');
  if (savedList !== null) {
    orderedList.innerHTML = savedList;
  }
};

addBackgroundColor();
completed();
