let section = document.querySelector('#tarefas');
let button = document.querySelector('#criar-tarefa');


function lista() {
  let list = document.createElement('ol');
  list.id = 'lista-tarefas';
  section.appendChild(list);
}
lista()

let olTarefa = document.querySelector('#lista-tarefas')

document.body.addEventListener('click', function () {
  
  let inputT = document.querySelector('#texto-tarefa');
  let li = document.createElement('li');
  olTarefa.appendChild(li);
  li.innerText = inputT.value;
  inputT.value = '';
})




function addTarefa(event) {



}
