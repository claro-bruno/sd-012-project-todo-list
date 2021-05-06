

function createTask() {
    const task = document.getElementById('texto-tarefa');
    const lista = document.getElementById('lista-tarefas');
    const addButton = document.getElementById('criar-tarefa');
    const mensagemListaVazia = document.getElementById('lista-vazia');
    task.focus();
    addButton.addEventListener('click', function () {
      const item = document.createElement('li');
      item.addEventListener('click', changeBack);
      item.innerHTML = task.value;
      item.className = 'item';
      lista.appendChild(item);
      task.value = '';
    });
  }
  

  
  window.onload = function toDoList() {
    createTask();
  } 

  item.addEventListener('click', changeBack);

  function changeBack(itemDaLista) {
      itemDaLista.target.style.backgroundColor = 'rgb(128, 128, 128';

  }

