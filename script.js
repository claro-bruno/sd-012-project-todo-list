const newTaskButton = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const removeFinishedTasksButton = document.getElementById('remover-finalizados');

newTaskButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputTask.value;
  inputTask.value = '';
  taskList.appendChild(li);
  selectLi();
  taskFinished()
});

function selectLi() {
  const lastLi = taskList.lastElementChild;
  lastLi.addEventListener('click', (event) => {
    deselectOtherLis();
    const targ = event.target;
    targ.className = 'selected';
    targ.style.backgroundColor = 'rgb(128, 128, 128)';
  });
};

function deselectOtherLis() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) { // refatorar para retirar o loop e retirar a seleção apenas do elemento com classe selected
    li[index].style.backgroundColor = 'white';
    li[index].classList.remove('selected');
  }
}

function taskFinished() {
  const lastLi = taskList.lastElementChild;
  lastLi.addEventListener('dblclick', (event) => {
    const targ = event.target;
    if (targ.style.textDecoration === 'line-through') {
      targ.style.textDecoration = '';
      targ.classList.remove('completed');
    } else {
      targ.style.textDecoration = 'line-through';
      targ.classList.add('completed');
    }
  });
};

console.log(removeFinishedTasksButton);
removeFinishedTasksButton.addEventListener('click', () => {
  for (let index = 0; index < taskList.children.length; index += 1) {
    if (taskList.children[index].classList.contains('completed')) {
      taskList.removeChild(taskList.children[index]);
    }
  }
});
