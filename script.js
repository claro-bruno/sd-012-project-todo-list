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
  let orderedList = document.getElementById('lista-tarefas');
  let listItems = orderedList.children;

  orderedList.addEventListener('click', function (event) {

    for (let index = 0; index < listItems.length; index += 1) {
      listItems[index].style.backgroundColor = '';
    };
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })

}
changeItemBG();