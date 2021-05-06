const newTaskButton = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const removeFinishedTasksButton = document.getElementById('remover-finalizados');
const removeAllButton = document.querySelector("#apaga-tudo");
const saveTasksButton = document.querySelector('#salvar-tarefas');

function loadtasks() {
  let tasksArray = JSON.parse(localStorage.getItem('tasksArray'));
  for (let index = 0; index < tasksArray.length; index += 1) {
    createTask(tasksArray[index]);
  }
};

loadtasks();

function deselectOtherLis() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) { // refatorar para retirar o loop e retirar a seleção apenas do elemento com classe selected
    li[index].style.backgroundColor = 'white';
    li[index].classList.remove('selected');
  }
}

function createTask(taskString) {
  const li = document.createElement('li');
  li.innerHTML = taskString;
  li.addEventListener('click', (event) => {
    deselectOtherLis();
    const targ = event.target;
    targ.classList.add('selected');
    targ.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  li.addEventListener('dblclick', (event) => {
    const targ = event.target;
    if (targ.style.textDecoration === 'line-through') {
      targ.style.textDecoration = '';
    } else {
      targ.style.textDecoration = 'line-through';
    }
    targ.classList.toggle('completed');
  });
  taskList.appendChild(li);
};

newTaskButton.addEventListener('click', () => {
  createTask(inputTask.value);
  inputTask.value = '';
});

removeFinishedTasksButton.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('completed')) {
      taskList.removeChild(li[index]);
    }
  }
});

removeAllButton.addEventListener('click', () => {
  const taskList = document.getElementById('lista-tarefas');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});

saveTasksButton.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  let tasksArray = [];
  for (let index = 0; index < li.length; index += 1) {
    tasksArray.push(li[index].innerHTML);
  }
  localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
});


