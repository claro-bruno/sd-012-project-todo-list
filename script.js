
const selecteIten = document.getElementById('lista-tarefas');

const textInput = document.querySelector('#texto-tarefa');

const buttonCreate = document.querySelector('.submit');

const buttonRmvCompleted = document.getElementById('remover-finalizados')

const buttonRemoveAll = document.getElementById('apaga-tudo')

const rmvButtonSelected = document.getElementById('remover-selecionado');

const moveUp = document.getElementById('mover-cima');

const moveDown = document.getElementById('mover-baixo');

buttonCreate.addEventListener('click', function () {
  if (textInput.value !== ''){
    const text = textInput.value;
    const createLi = document.createElement('li');
    createLi.className = 'task';
    createLi.innerHTML = text;
    selecteIten.appendChild(createLi);
    document.getElementById('texto-tarefa').value = null;
  } else {
    alert('Adicione alguma tarefa!')
  }
});

textInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter'){
    let selecteIten = document.getElementById('lista-tarefas');
    const text = textInput.value;
    const createLi = document.createElement('li');
    createLi.className = 'task';
    createLi.innerHTML = text;
    selecteIten.appendChild(createLi);
    document.getElementById('texto-tarefa').value = null;
  }
})

buttonRemoveAll.addEventListener('click', function() {
    selecteIten.innerHTML = '';
})


selecteIten.addEventListener('click', function (event) {
  let taskIten = document.getElementsByClassName('task');
  for ( let index = 0; index < taskIten.length; index +=1){
    taskIten[index].classList.remove('task-selected');
  }
  event.target.classList.add('task-selected');
});

selecteIten.addEventListener('dblclick', function (event) {
  if(event.target.classList.value.includes('completed')){
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

buttonRmvCompleted.addEventListener('click', function () {
  let taskCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < taskCompleted.length; index += 1) {
    selecteIten.removeChild(taskCompleted[index]);
  }
});

moveUp.addEventListener('click', mvUp)

function mvUp() {
  let tasks = document.getElementsByClassName('task');
  for (let index = 0; index < tasks.length; index++) {
    console.log(tasks[index].className);
    if (tasks[index].className !== 'task') {
      if (index === 0) {
        alert('Ação inválida');
      } else {
        let taskValue = tasks[index].innerHTML
        let taskClass = tasks[index].className
        let taskPrevious = tasks[index - 1].innerHTML;
        let taskPreviousClass = tasks[index - 1].className;
      
        tasks[index] = taskPrevious;
        tasks[index].className = taskPreviousClass;

        tasks[index - 1] = taskValue;
        tasks[index - 1].className = taskClass;
      }
    }
  };
};

rmvButtonSelected.addEventListener('click', mvDown);

function mvDown() {
  let rmSelected = document.getElementsByClassName('task');
  for(let index = 0; index < rmSelected.length; index += 1){
    if(rmSelected[index].className !== 'task'){
      selecteIten.removeChild(rmSelected[index]);
    }
  };
};