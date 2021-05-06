const newTaskButton = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

newTaskButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputTask.value;
  inputTask.value = '';
  taskList.appendChild(li);
  selectLi();
});

function selectLi() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('click', (event) => {
      deselectOtherLis();
      const targ = event.target;
      targ.className = 'selected';
      targ.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
};

function deselectOtherLis() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].style.backgroundColor = 'white';
    li[index].classList.remove('selected');
  }
}
