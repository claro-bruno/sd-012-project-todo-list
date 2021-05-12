window.onload = function () {//só irá execultar depois que a página carregar
  document.getElementById('criar-tarefa').addEventListener('click', CreateTask);
function CreateTask() {//cria a tarefa
  const text = document.getElementById('texto-tarefa');
  const task = document.createElement('li');
  document.getElementById('lista-tarefas').appendChild(task);
  task.innerText = text.value;
  text.value = null;
  selectTask();
}
document.getElementById('apaga-tudo').addEventListener('click', removeTasks);
function removeTasks() {//referencia: https://qastack.com.br/programming/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  const task = document.getElementById("lista-tarefas");
  while (task.firstChild) {//enquanto houver filho do nó pai irá excluir o último nó filho(li).
    task.removeChild(task.lastChild);
  }
}
document.getElementById('remover-finalizados').addEventListener('click', removeFinished);

function removeFinished(){//referencia: https://www.w3schools.com/jsref/met_node_removechild.asp
  const task = document.querySelectorAll('li');
  const taskpai = document.getElementById('lista-tarefas');
  for (let index=0; index < task.length; index += 1) {
    if(task[index].classList.contains('completed')){
      taskpai.removeChild(task[index]);
    }
  } 
}
function removeSelectedClass() {//remove a classe selected
  const task = document.getElementsByTagName('li');
  for (let index=0; index < task.length; index += 1) {
    if(task[index].classList.contains('selected')){
      task[index].classList.remove('selected');
    }
  }
} 
function completedLineThrough(event){//add a classe completed que risca a tarefa quando der dois cliques e remove se já estiver riscada.
  const task = event.target.classList;
  if(task.contains('completed')){
    task.remove('completed');
  }else{
  task.add('completed');
  }
}
function coloringbackground (event) {//atribui a class selected que contém o background cinza.
  removeSelectedClass(event);//remove a classe selected se houver
  event.target.classList.add('selected');
}
function selectTask() {//captura o clique na tarefa
  const task = document.getElementsByTagName('li');
  for (let index=0; index < task.length; index += 1) {
    task[index].addEventListener('click', coloringbackground);
    task[index].addEventListener('dblclick', completedLineThrough);
  }
}
}   

