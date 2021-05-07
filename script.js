window.onload = function () {

//5 e 6
let addTaskButton = document.getElementById('criar-tarefa');
function addTask() {
    const input = document.getElementById('texto-tarefa');
    if (input.value === '') {
      alert('Insira uma tarefa!');
    } else {
    const taskList = document.getElementById('lista-tarefas');
    const task = document.createElement('li');
    task.className = 'task-item';
    task.innerHTML = input.value;
    taskList.appendChild(task);
    input.value = '';
    }
  }
  addTaskButton.addEventListener('click', addTask); 
  
//7 e 8
//Aplicando event bubbling (Amigo de turma Thalles me mostrou e ensinou como funciona!)
//Link: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('task-item')) {
    clickedTask(event);
  };
})

document.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    completedTask();
  }
})

function clickedTask(event) {
  const greyTask = document.querySelector('.selected');
  if (greyTask === undefined) {
    event.target.classList.add('selected');
  } else {  
    event.target.classList.add('selected');  
    greyTask.classList.remove('selected');
}
}

function completedTask(event) {
  const taskCompleted = document.querySelector('completed');
  if (taskCompleted === undefined) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.add('completed');
    taskCompleted.classList.remove('completed');
  }
}
}