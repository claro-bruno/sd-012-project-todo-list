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

function paintBg() {
  const selectList = document.querySelectorAll('.task');
  for (let index = 0; index < selectList.length; index += 1) {
    if (selectList[index].classList.contains('selected')) {
      selectList[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      selectList[index].style.backgroundColor = 'white';
    }
  }
}

function selectItem() {
  olList.addEventListener('click', (event) => {
    const targetList = event.target;
    const selectList = document.querySelector('.selected');
    if (selectList !== null) {
      selectList.classList.remove('selected');
      targetList.classList.add('selected');
    } else {
      targetList.classList.add('selected');
    }
    paintBg();
  });
}
selectItem();
