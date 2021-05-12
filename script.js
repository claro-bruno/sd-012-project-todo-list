let input = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
let addTaskButton = document.getElementById('criar-tarefa');
function criarTarefa () {
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
addTaskButton.addEventListener('click', criarTarefa);

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('task-item')) {
      clickedTask(event);
    };
    if (event.target.id === 'apaga-tudo') {
      deleteTasks();
    }
    if (event.target.id === 'remover-finalizados') {
      removeCompletedTasks();
    }
    if (event.target.id === 'salvar-tarefas') {
      saveTasksLS();
    }
    if (event.target.id === 'mover-cima') {
      upper();
    }
    if (event.target.id === 'mover-baixo') {
      downer();
    }
    if (event.target.id === 'remover-selecionado') {
      removeTaskSelected();
    }
  })

  document.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('task-item')) {
      completedTasks(event);
    }
  })

  function clickedTask(event) {
    const tasks = document.getElementsByClassName('task-item');
    const greyTask = event.target;
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].classList.remove('selected');    
    }
    if (greyTask.classList.contains('selected')) {
      greyTask.classList.add('selected');
    } else {
      greyTask.classList.add('selected');
    }
  }