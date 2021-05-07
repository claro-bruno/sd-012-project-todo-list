/* eslint-disable prefer-arrow-callback */
let listPlace = document.querySelector('#list-place');
let orderedList = document.querySelector('#lista-tarefas');


addBackgroundColor();


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

/*function addBackgroundColor() {
  orderedList.addEventListener('click', function(event) {
    const selected = event.target;
    selected.classList.add('selected');
    removeBackgroundColor();
  })
}

function removeBackgroundColor() {
  orderedList.addEventListener('click', function() {
    const notSelected = document.querySelector('.selected');
    notSelected.classList.remove('selected');
  })
}
*/

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



/*
function addBackgroundColor() {
  let li = document.createElement('li');
  orderedList.addEventListener('click', function(event) {
    for (let index = 0; index < li.length; index += 1) {
      li[index].style.backgroundColor = 'white';
    }
    const selected = event.target;
    selected.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
*/







