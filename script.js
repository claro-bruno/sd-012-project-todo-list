let task = document.querySelector('#texto-tarefa').value;
let todolist = document.querySelector('#lista-tarefas');
let buttonAdd = document.querySelector('#criar-tarefa');
let resetButton = document.querySelector('#apaga-tudo');

// funcao para botao adicionar lista
function makeAList (){

  let task = document.querySelector('#texto-tarefa').value;
  let text = document.createTextNode(task);
  let list = document.createElement('li');
  list.appendChild(text);
  todolist.appendChild(list);
  document.querySelector('#texto-tarefa').value = ''
}

buttonAdd.addEventListener('click',makeAList)

function removeText () {
todolist.innerHTML=''
}
resetButton.addEventListener('click',removeText)
// buttonAdd.addEventListener('click',removeText)
// function addToDoList() {
//   let list = document.createElement('li');
//   list.innerHTML = task.value;
//   todolist.appendChild(li);
//   task.value = '';
// }

// buttonAdd.addEventListener('click', addToDoList);
