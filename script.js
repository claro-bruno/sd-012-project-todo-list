let section = document.querySelector('#tarefas');

let btn = document.getElementById('criar-tarefa');
console.log(btn);

function lista() {
  let list = document.createElement('ol');
  list.id = 'lista-tarefas';
  section.appendChild(list);
}
lista()

btn.addEventListener('click', function () {
    let olTarefa = document.querySelector('#lista-tarefas')
    let inputT = document.querySelector('#texto-tarefa');
  let li = document.createElement('li');
    olTarefa.appendChild(li);
  li.innerText = inputT.value;
    inputT.value = '';

li.addEventListener('click', selecao)
});

function selecao (event) {
event.target.style.backgroundColor = 'rgb(128,128,128)'
}