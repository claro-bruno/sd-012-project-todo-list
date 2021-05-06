function addTask() {
  let addButton = document.getElementById('criar-tarefa');
  let taskList = document.getElementById('lista-tarefas');

  addButton.addEventListener('click', function(){
    let createLi = document.createElement('li');
    let input = document.getElementById('texto-tarefa');
    createLi.innerHTML = input.value;
    taskList.appendChild(createLi);
    input.value = '';
  })
}
addTask();