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
    
  //7, 8, 9
  //Aplicando event bubbling (Amigo de turma Thalles me mostrou e ensinou como funciona!)
  //Link: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('task-item')) {
      clickedTask(event);
    };
    if (event.target.id === 'apaga-tudo') {
      deleteTasks();
    }
  })

  document.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('task-item')) {
      completedTasks(event);
    }
  })
  //8
  function clickedTask(event) {
    const tasks = document.getElementsByClassName('task-item');
    const greyTask = event.target;
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].classList.remove('selected');    
    }
    if (greyTask.classList.contains('selected')) {
      greyTask.classList.remove('selected');
    } else {
      greyTask.classList.add('selected');
    }
  }
  //9
  function completedTasks(event) {
    const completedTask = event.target;
    if (completedTask.classList.contains('completed')) {
      completedTask.classList.remove('completed');
    } else {
      completedTask.classList.add('completed');
    }
  }
  //10
  const cleanButton = document.createElement('button');
  cleanButton.id = 'apaga-tudo';
  cleanButton.innerHTML = 'Apagar tudo!';
  document.body.appendChild(cleanButton); 

  function deleteTasks() {
    const tasks = document.querySelectorAll('.task-item');
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].remove();
    } 
  }
}