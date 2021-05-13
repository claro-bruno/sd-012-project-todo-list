const olList = document.querySelector('#lista-tarefas');
const btnTask = document.getElementById('criar-tarefa');
const input = document.querySelector('#texto-tarefa');

function listTask() {
  btnTask.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.classList.add('task');
    olList.appendChild(newItem);
    newItem.innerHTML = input.value;
    input.value = '';
  });
}
listTask();
