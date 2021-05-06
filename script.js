function createTask() {
  let btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', () => {
    let input = document.querySelector('#texto-tarefa');
    let task = document.createElement('li');
    task.innerHTML = input.value;
    input.value = '';
    let list = document.querySelector('#lista-tarefas');
    list.appendChild(task);
  });
};

window.onload = () => {
    createTask();
};
