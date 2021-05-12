let section = document.querySelector('#tarefas');
let button = document.querySelector('#criar-tarefa');
let inputT = document.querySelector('#texto-tarefa')
let olTarefa = document.querySelector('#lista-tarefas');


function lista() {
  let list = document.createElement('ol');
  list.id = 'lista-tarefas';
  section.appendChild(list);
}
lista()

function addTarefa(event) {
  let li = document.createElement('li');
  li.innerText = inputT.value;
  inputT.value = '';
  olTarefa.appendChild(li);
}

 addTarefa()
function listButton() {
    button.addEventListener('click', addTarefa);
  }
  
