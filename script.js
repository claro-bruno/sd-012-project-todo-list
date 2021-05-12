const creatList = document.getElementById('criar-tarefa');

function addtolist(event) {
const li = document.createElement('li');
li.className = 'toDO';
li.innerHTML = document.querySelector('#texto-tarefa').value;
document.getElementById('lista-tarefas').appendChild(li);
document.querySelector('#texto-tarefa').value = '';
}

creatList.addEventListener('click', addtolist);

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

const highlightList = document.getElementById('lista-tarefas');

highlightList.addEventListener('click', highlightBackground);