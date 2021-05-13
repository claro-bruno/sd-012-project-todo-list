let task = document.querySelector('#texto-tarefa').value;
let todolist = document.querySelector('#lista-tarefas');
let buttonAdd = document.querySelector('#criar-tarefa');
let resetButton = document.querySelector('#apaga-tudo');

// funcao para botao adicionar lista
function makeAList() {
  let task = document.querySelector('#texto-tarefa').value;
  let text = document.createTextNode(task);
  let list = document.createElement('li');
  list.appendChild(text);
  todolist.appendChild(list);
  document.querySelector('#texto-tarefa').value = '';
}
// acao do botao ADD TASK
buttonAdd.addEventListener('click', makeAList);
// fucncao para remover o text inserido,
function removeText() {
  todolist.innerHTML = '';
}
resetButton.addEventListener('click', removeText);

// buscar todos itens li na variavel
let listIten = document.getElementsByTagName('li');
// funcao junto funcao para clicar e mudar a cor no item da lista
function clickListColor(clickColor) {
  for (let indexcolor = 0; indexcolor < listIten.length; indexcolor += 1) {
    clickColor.target.style.backgroundColor = 'rgb(128,128,128)';
  }
}

todolist.addEventListener('click', clickListColor)
// buttonAdd.addEventListener('click',removeText)
// function addToDoList() {
//   let list = document.createElement('li');
//   list.innerHTML = task.value;
//   todolist.appendChild(li);
//   task.value = '';
// }

// buttonAdd.addEventListener('click', addToDoList);
