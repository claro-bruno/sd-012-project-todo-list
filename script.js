function addTask() {
  let addButton = document.getElementById('criar-tarefa');
  let taskList = document.getElementById('lista-tarefas');

  addButton.addEventListener('click', function () {
    let createLi = document.createElement('li');
    let input = document.getElementById('texto-tarefa');
    createLi.innerHTML = input.value;
    taskList.appendChild(createLi);
    input.value = '';
  })
}
addTask();

function changeItemBG() {
  let listItems = document.getElementById('lista-tarefas');

  listItems.addEventListener('click', function (event) {
    console.log(event.target);
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })

}
changeItemBG();