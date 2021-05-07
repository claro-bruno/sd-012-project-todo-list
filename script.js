window.onload = () => {

};

const newTaskButton = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const removeFinishedTasksButton = document.getElementById('remover-finalizados');
const removeAllButton = document.querySelector("#apaga-tudo");
const saveTasksButton = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const removeSelectedButton = document.querySelector('#remover-selecionado');

function deselectAll() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) { // refatorar para retirar o loop e retirar a seleção apenas do elemento com classe selected
    li[index].style.backgroundColor = 'white';
    li[index].classList.remove('selected');
  }
};

function buildTask(taskObject) {
  const li = document.createElement('li');
  li.innerHTML = taskObject.task;
  if (taskObject.selected) {
    li.classList.add('selected');
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  }
  if (taskObject.completed) {
    li.classList.add('completed');
    li.style.textDecoration = 'line-through';
  }
  li.addEventListener('click', (event) => {
    deselectAll();
    const targ = event.target;
    targ.classList.add('selected');
    targ.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  li.addEventListener('dblclick', (event) => {
    const targ = event.target;
    if (targ.style.textDecoration === 'line-through') {
      targ.style.textDecoration = '';
    } else {
      targ.style.textDecoration = 'line-through';
    }
    targ.classList.toggle('completed');
  });
  taskList.appendChild(li);
};

function loadtasks() {
  let arrayOfTaskObjs = JSON.parse(localStorage.getItem('arrayOfTaskObjs'));
  for (let index = 0; index < arrayOfTaskObjs.length; index += 1) {
    buildTask(arrayOfTaskObjs[index]);
  }
};

function makeArrayOfTaskObjs() {
  const li = document.querySelectorAll('li');
  let arrayOfTaskObjs = [];
  for (let index = 0; index < li.length; index += 1) {
    let taskObj = {
      'position':  index + 1,
      'task':      li[index].innerHTML
    };
    if (li[index].classList.contains('selected')) {
      taskObj.selected = true;
    }
    if (li[index].classList.contains('completed')) {
      taskObj.completed = true;
    }
    arrayOfTaskObjs.push(taskObj)
    console.log(taskObj); //
  }
  return arrayOfTaskObjs;
};

if (localStorage.getItem('arrayOfTaskObjs')) {
  loadtasks();
};

let arrayOfTaskObjs = makeArrayOfTaskObjs();

newTaskButton.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  let taskObj = {
    'position':  li.length + 1,
    'task':      inputTask.value
  };
  buildTask(taskObj);
  inputTask.value = '';
});

removeFinishedTasksButton.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('completed')) {
      taskList.removeChild(li[index]);
    }
  }
});

removeAllButton.addEventListener('click', () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});

saveTasksButton.addEventListener('click', () => {
  let arrayOfTaskObjs = makeArrayOfTaskObjs();
  console.log(arrayOfTaskObjs); //
  localStorage.setItem('arrayOfTaskObjs', JSON.stringify(arrayOfTaskObjs));
});

moveUpButton.addEventListener('click', () => {
  const taskListChildren = document.getElementById('lista-tarefas').children;
  for (let index = 0; index < taskListChildren.length; index += 1) {
    if (taskListChildren[index].classList.contains('selected')) {
      if (index !== 0) {
        let selected = taskListChildren[index];
        let aboveSelected = taskListChildren.item(index - 1);
        selected.parentElement.insertBefore(selected, aboveSelected);
        break;
      }
    }
  }
});

moveDownButton.addEventListener('click', () => {
  const taskListChildren = document.getElementById('lista-tarefas').children;
  let count = 1;
  for (let index = 0; index < taskListChildren.length; index += 1) {
    if (count !== 1) {
      break;
    }
    if (taskListChildren[index].classList.contains('selected')) {
      count += 1;
      if (index !== (taskListChildren.length - 1)) {
        let selected = taskListChildren[index];
        let belowSelected = taskListChildren.item(index + 1);
        belowSelected.parentElement.insertBefore(selected, belowSelected.nextElementSibling);
      }
    }
  }
});

removeSelectedButton.addEventListener('click', () => {
  const taskListChildren = document.getElementById('lista-tarefas').children;
  for (let index = 0; index < taskListChildren.length; index += 1) {
    if (taskListChildren[index].classList.contains('selected')) {
        let selected = taskListChildren[index];
        selected.parentElement.removeChild(selected);
      }
  }
});

// moveUpButton.addEventListener('click', () => {
//   let arrayOfTaskObjs = makeArrayOfTaskObjs();
//   let newArrayOfTaskObjs = [];
//   for (let index = 0; index < arrayOfTaskObjs.length; index += 1) {
//     if (arrayOfTaskObjs[index].selected) {
//       let element = arrayOfTaskObjs[index];
//       console.log(`element: `);
//       let position = arrayOfTaskObjs[index].position;
//       let subtracted = arrayOfTaskObjs[index].splice(position, 1);
//       let added = subtracted.splice((arrayOfTaskObjs[index -1]), 0, element);
//       newArrayOfTaskObjs.push(added);
//     }
//   }

//   arrayOfTaskObjs.every((task) => {
//     if (task.selected) {
//       let element = task;
//       console.log(`element: ${task}`);
//       let position = task.position;

//     }
//   });

//   console.log(`novo array${newArrayOfTaskObjs}`)
// });
