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
  li.className = 'li';
    olTarefa.appendChild(li);
  li.innerText = inputT.value;
    inputT.value = '';
li.addEventListener('click', cor)
});

function cor (event) {
    let selectClass = document.querySelectorAll('.li');
    for (let index = 0; index < selectClass.length; index += 1) {
        selectClass[index].style.backgroundColor = 'white';

    }
event.target.style.backgroundColor = 'rgb(128,128,128)';
}

