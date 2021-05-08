const toDoList = [''];

const textInput = document.querySelector('#texto-tarefa');

const buttonCreate = document.querySelector('.submit');

buttonCreate.addEventListener('click', function () {
  if (textInput.value === ''){
    alert('Adicione alguma tarefa!')
  } else {
    let catOl = document.getElementById('lista-tarefas');
    const text = textInput.value;
    const createLi = document.createElement('li');
    createLi.className = 'task';
    createLi.innerHTML = text;
    catOl.appendChild(createLi);
    document.getElementById('texto-tarefa').value = null;
  }
});


let buttonRemove = document.getElementById('apaga-tudo')
let removeAll = document.getElementById('lista-tarefas');
buttonRemove.addEventListener('click', function() {
    removeAll.innerHTML = '';
})

let selecteIten = document.getElementById('lista-tarefas');

selecteIten.addEventListener('click', function (event) {
  let itenColor = document.getElementsByTagName('li');
  for (let key in itenColor){
    itenColor[key].className = 'task';
    event.target.className = 'task-selected';
  }
});