/* eslint-disable prefer-arrow-callback */
let listPlace = document.querySelector('#list-place');
let orderedList = document.querySelector('#lista-tarefas');

addBackgroundColor();
completed();


function makeList() {
  let li = document.createElement('li');
  let userTask = document.getElementById('texto-tarefa').value;
  let listItem = document.createTextNode(userTask);
  li.appendChild(listItem);
  if (userTask === '') {
    alert('Escreva uma tarefa!');
  } else {
    document.getElementById('lista-tarefas').appendChild(li);
  }
  document.getElementById('texto-tarefa').value = '';
}

function addBackgroundColor() {
  listPlace.addEventListener('click', function(event) {
    const selected = event.target;
    selected.style.backgroundColor = 'rgb(128, 128, 128)';
    listPlace.addEventListener('click', function(event) { 
      const selected2 = event.target;
      selected2.style.backgroundColor = 'rgb(128, 128, 128)';
      selected.style.backgroundColor = 'white';
    });
  });
}
function completed() {
  listPlace.addEventListener('dblclick', function(event) {
    const itemCompleted = event.target;
    itemCompleted.classList.toggle('completed');
  });
}

function deleteAll(){
  orderedList.innerHTML = "";
}













