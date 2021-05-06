window.onload = function () {

//5 e 6
let addTaskButton = document.getElementById('criar-tarefa');
function addTask() {
    const input = document.getElementById('texto-tarefa');
    if (input.value === '') {
      alert('Insira uma tarefa!');
    } else {
    const taskList = document.getElementById('lista-tarefas');
    const task = document.createElement('li');
    task.className = 'task-item';
    task.innerHTML = input.value;
    taskList.appendChild(task);
    input.value = '';
    }
  }
  addTaskButton.addEventListener('click', addTask); 

//7

// document.addEventListener('click', function (event) {
//   if (event.target.classList.contains('task-item')) {
//     clickedTask();
//   };
// })

// function clickedTask()

//
}