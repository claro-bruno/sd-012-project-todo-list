
const selecteIten = document.getElementById('lista-tarefas');

const textInput = document.querySelector('#texto-tarefa');

const buttonCreate = document.querySelector('.submit');

const buttonRmvCompleted = document.getElementById('remover-finalizados')

const buttonRemoveAll = document.getElementById('apaga-tudo')

const rmvButtonSelected = document.getElementById('remover-selecionado');

const moveUp = document.getElementById('mover-cima');

const moveDown = document.getElementById('mover-baixo');

const save = document.getElementById('salvar-tarefas');

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
    if (tasks[index].className !== 'task') {
      if (index === 0) {
        alert('Ação inválida');
      } else {
        let taskValue = tasks[index].innerHTML
        let taskClass = tasks[index].className
        let taskPrevious = tasks[index - 1].innerHTML;
        let taskPreviousClass = tasks[index - 1].className;
      
        tasks[index].innerHTML = taskPrevious;
        tasks[index].className = taskPreviousClass;

        tasks[index - 1].innerHTML = taskValue;
        tasks[index - 1].className = taskClass;
      }
    }
  }
};

moveDown.addEventListener('click', mvDown);

function mvDown() {
  let tasks = document.querySelectorAll('.task');
  for (let index = tasks.length - 1; index >= 0; index-= 1) {
    if (tasks[index].className !== 'task') {
      if (index === tasks.length - 1) {
        alert('Ação inválida');
      } else {
        let taskValue = tasks[index].innerHTML
        let taskClass = tasks[index].className
        let taskNext = tasks[index + 1].innerHTML;
        let taskNextClass = tasks[index + 1].className;
        
        tasks[index + 1].innerHTML = taskValue;
        tasks[index + 1].className = taskClass;
        
        tasks[index].innerHTML = taskNext;
        tasks[index].className = taskNextClass;
      }
    }
  };
};

rmvButtonSelected.addEventListener('click', removeSelected);

function removeSelected() {
  let rmSelected = document.getElementsByClassName('task');
  for(let index = 0; index < rmSelected.length; index += 1){
    if(rmSelected[index].className !== 'task'){
      selecteIten.removeChild(rmSelected[index]);
    }
  };
};

save.addEventListener('click', saveTask);

function saveTask () {
  let list = document.getElementById('lista-tarefas')
  let database = JSON.parse(localStorage.getItem('taskSaved'));

  if (database !== null) {
    localStorage.setItem('taskSaved', '[]');
    database = [];
  }

  let taskRegistre = {
    task: list.innerText
  };

  database.push(taskRegistre);
  localStorage.setItem('texto-tarefa', JSON.stringify(database));
  alert('Lista salva com sucesso!');
  list.innerText = '';
}