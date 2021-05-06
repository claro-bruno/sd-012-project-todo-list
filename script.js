

function createTask() {
    const task = document.getElementById('texto-tarefa');
    const lista = document.getElementById('lista-tarefas');
    const addButton = document.getElementById('criar-tarefa');
    task.focus();
    addButton.addEventListener('click', function () {
      const item = document.createElement('li');
      item.innerHTML = task.value;
      item.className = 'item';
      lista.appendChild(item);
      task.value = '';
    });
  }
  

  
  window.onload = function toDoList() {
    createTask();
  }

