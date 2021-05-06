const newTaskButton = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

newTaskButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputTask.value;
  inputTask.value = '';
  taskList.appendChild(li);
  colorLi();
});

function colorLi() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('click', (event) => {
      const targ = event.target;
      console.log(targ);
      targ.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
};
