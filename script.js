document.getElementById('criar-tarefa').addEventListener('click', CreateTask);
function CreateTask() {//cria a tarefa
  const text = document.getElementById('texto-tarefa');
  const task = document.createElement('li');
  document.getElementById('lista-tarefas').appendChild(task);
  task.innerText = text.value;
  text.value = null;
  selectTask();
}
function removeSelectedClass() {//remove a classe selected
  const task = document.getElementsByTagName('li');
  for (let index=0; index < task.length; index += 1) {
    if(task[index].classList.contains('selected')){
      task[index].classList.remove('selected');
    }
  }
}
function completedLineThrough(event){
  event.target.classList.add('completed');
}
function coloringbackground (event) {//atribui a class selected que contém o background cinza.
  removeSelectedClass();//remove a classe selected se houver
  event.target.classList.add('selected');
}
function selectTask() {//captura o clique na tarefa
  const task = document.getElementsByTagName('li');
  for (let index=0; index < task.length; index += 1) {
    task[index].addEventListener('click', coloringbackground);
    task[index].addEventListener('dblclick', completedLineThrough);
  }
}
   
  
