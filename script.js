const toDoList = [''];

const textInput = document.querySelector('#texto-tarefa');

const buttonCreate = document.querySelector('.submit');

buttonCreate.addEventListener('click', function (e) {
  if (textInput.value !== ''){
    let catOl = document.getElementById('lista-tarefas');
    const text = textInput.value;
    const createLi = document.createElement('li');
    createLi.className = 'task';
    createLi.innerHTML = text;
    catOl.appendChild(createLi);
    document.getElementById('texto-tarefa').value = null;
  } else {
    alert('Adicione alguma tarefa!')
  }
});

textInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter'){
    let catOl = document.getElementById('lista-tarefas');
    const text = textInput.value;
    const createLi = document.createElement('li');
    createLi.className = 'task';
    createLi.innerHTML = text;
    catOl.appendChild(createLi);
    document.getElementById('texto-tarefa').value = null;
  }
})

let buttonRemoveFinished = document.getElementById('apaga-tudo')
let removeFinished = document.getElementById('lista-tarefas');
buttonRemoveFinished.addEventListener('click', function() {
    removeFinished.innerHTML = '';
})

let buttonRemove = document.getElementById('apaga-tudo')
let removeAll = document.getElementById('lista-tarefas');
buttonRemove.addEventListener('click', function() {
    removeAll.innerHTML = '';
})

let selecteIten = document.getElementById('lista-tarefas');

selecteIten.addEventListener('click', function (event) {
  let taskIten = document.getElementsByClassName('task');
  for ( let index = 0; index < taskIten.length; index +=1){
    taskIten[index].classList.remove('task-selected');
  }
  event.target.classList.add('task-selected');
});

selecteIten.addEventListener('dblclick', function (event) {
  let  doubleClick = document.getElementsByTagName('li');
  for (let key in doubleClick){
    event.target.classList.add('completed');
  }
});



