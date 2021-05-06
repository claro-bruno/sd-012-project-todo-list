function unmarkTask() {
  let selectedTask = document.querySelector('#selected');
  selectedTask.id = '';
}

function changeTaskColor() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', (e) => {
    if (e.target.className === 'tarefa' || e.target.className === 'tarefa completed') {
      if (document.querySelector('#selected') !== null) {
        unmarkTask();
      }
      e.target.id = 'selected';
    };
  });
}

function deleteCompletedTasks() {
  const btn = document.querySelector('#remover-finalizados');
  btn.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.tarefa.completed');
    console.log(completedTasks)
    for (let taskIndex = 0; taskIndex < completedTasks.length; taskIndex += 1) {
      completedTasks[taskIndex].remove();
    };
  });
}

function completeTask() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('dblclick', (e) => {
    if (e.target.className === 'tarefa') {
      e.target.className += ' completed';
    } else if (e.target.className === 'tarefa completed') {
      e.target.className = 'tarefa';
    };
    deleteCompletedTasks();
  });
}

function deleteAllList() {
  const btn = document.querySelector('#apaga-tudo');
  btn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.tarefa');
    for (let taskIndex = 0; taskIndex < tasks.length; taskIndex += 1) {
      tasks[taskIndex].remove();
    };
  });
}

function createTask() {
  let btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', () => {
    let input = document.querySelector('#texto-tarefa');
    let task = document.createElement('li');
    task.className = 'tarefa';
    task.innerHTML = input.value;
    input.value = '';
    let list = document.querySelector('#lista-tarefas');
    list.appendChild(task);
    deleteAllList();
  });
}



window.onload = () => {
  createTask();
  changeTaskColor();
  completeTask();
};
