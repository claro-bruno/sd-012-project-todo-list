const newTaskButton = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const removeFinishedTasksButton = document.getElementById('remover-finalizados');

newTaskButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputTask.value;
  inputTask.value = '';
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
});

removeFinishedTasksButton.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('completed')) {
      taskList.removeChild(li[index]);
    }
  }
});

function deselectOtherLis() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) { // refatorar para retirar o loop e retirar a seleção apenas do elemento com classe selected
    li[index].style.backgroundColor = 'white';
    li[index].classList.remove('selected');
  }
}


