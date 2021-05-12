const creatList = document.getElementById('criar-tarefa');

function addtolist(event) {
  const li = document.createElement('li');
  li.className = 'toDO';
  li.innerHTML = document.querySelector('#texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(li);
  document.querySelector('#texto-tarefa').value = '';
}

creatList.addEventListener('click', addtolist);

// eu fiz a função highlightBackground baseada no trabalho de Marcos Siqueira
function highlightBackground(event) {
    let previous = document.querySelector('.highlighted');
    if (!previous) { 
      event.target.classList.add('highlighted') 
    } else if (event.target.classList.contains('highlighted')){ 
      event.target.classList.remove('highlighted');
    } else {
      previous.classList.remove('highlighted');
      event.target.classList.add('highlighted');
    }
}

const list = document.getElementById('lista-tarefas');

list.addEventListener('click', highlightBackground);

function completed(event) {
  if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
  } else {
      event.target.classList.add('completed');
  }
}

list.addEventListener('dblclick', completed);
