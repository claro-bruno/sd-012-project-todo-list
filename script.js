const newTaskButton = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const removeFinishedTasksButton = document.getElementById('remover-finalizados');
const removeAllButton = document.querySelector('#apaga-tudo');
const saveTasksButton = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const removeSelectedButton = document.querySelector('#remover-selecionado');
const deselectButton = document.querySelector('#remover-selecao');
const taskListChildren = document.getElementById('lista-tarefas').children;
const textDecoration = 'line-through';

function deselectAll() {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) { // refatorar para retirar o loop e retirar a seleção apenas do elemento com classe selected
    li[index].style.backgroundColor = 'white';
    li[index].classList.remove('selected');
  }
}

function recuperarClasses(elemento, taskObject) {
  const elementum = elemento;
  if (taskObject.selected) {
    elementum.classList.add('selected');
    elementum.style.backgroundColor = 'rgb(128, 128, 128)';
  }
  if (taskObject.completed) {
    elementum.classList.add('completed');
    elementum.style.textDecoration = textDecoration;
  }
  return elementum;
}

function adicionarEscutadores(li) {
  li.addEventListener('click', (event) => {
    deselectAll();
    const targ = event.target;
    targ.classList.add('selected');
    targ.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  li.addEventListener('dblclick', (event) => {
    const targ = event.target;
    if (targ.style.textDecoration === textDecoration) {
      targ.style.textDecoration = '';
    } else {
      targ.style.textDecoration = textDecoration;
    }
    targ.classList.toggle('completed');
  });
  return li;
}

function buildTask(taskObject) {
  let li = document.createElement('li');
  li.innerHTML = taskObject.task;
  li = recuperarClasses(li, taskObject);
  li = adicionarEscutadores(li);
  taskList.appendChild(li);
}

function loadtasks() {
  const arrayOfTaskObjs = JSON.parse(localStorage.getItem('arrayOfTaskObjs'));
  for (let index = 0; index < arrayOfTaskObjs.length; index += 1) {
    buildTask(arrayOfTaskObjs[index]);
  }
}

if (localStorage.getItem('arrayOfTaskObjs')) {
  loadtasks();
}

function makeArrayOfTaskObjs() {
  const li = document.querySelectorAll('li');
  const arrayOfTaskObjs = [];
  for (let index = 0; index < li.length; index += 1) {
    const taskObj = {
      position: index + 1,
      task: li[index].innerHTML,
    };
    if (li[index].classList.contains('selected')) {
      taskObj.selected = true;
    }
    if (li[index].classList.contains('completed')) {
      taskObj.completed = true;
    }
    arrayOfTaskObjs.push(taskObj);
  }
  return arrayOfTaskObjs;
}

newTaskButton.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  const taskObj = {
    position: li.length + 1,
    task: inputTask.value,
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
  const arrayOfTaskObjs = makeArrayOfTaskObjs();
  console.log(arrayOfTaskObjs); //
  localStorage.setItem('arrayOfTaskObjs', JSON.stringify(arrayOfTaskObjs));
});

moveUpButton.addEventListener('click', () => {
  for (let index = 0; index < taskListChildren.length; index += 1) {
    if (taskListChildren[index].classList.contains('selected') && index !== 0) {
      const selected = taskListChildren[index];
      const aboveSelected = taskListChildren.item(index - 1);
      selected.parentElement.insertBefore(selected, aboveSelected);
      break;
    }
  }
});

function moveDownIfNotLast(liList, index) {
  if (index !== (liList.length - 1)) {
    const selected = liList[index];
    const belowSelected = liList.item(index + 1);
    belowSelected.parentElement.insertBefore(selected, belowSelected.nextElementSibling);
  }
}

moveDownButton.addEventListener('click', () => {
  let count = 1;
  for (let index = 0; index < taskListChildren.length; index += 1) {
    if (count !== 1) {
      break;
    }
    if (taskListChildren[index].classList.contains('selected')) {
      count += 1;
      moveDownIfNotLast(taskListChildren, index);
    }
  }
});

removeSelectedButton.addEventListener('click', () => {
  for (let index = 0; index < taskListChildren.length; index += 1) {
    if (taskListChildren[index].classList.contains('selected')) {
      const selected = taskListChildren[index];
      selected.parentElement.removeChild(selected);
    }
  }
});

deselectButton.addEventListener('click', () => { // substituir botão por clique no body => event bubbling
  deselectAll();
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

// https://github.com/tryber/sd-012-project-todo-list/pull/4
// https://github.com/tryber/sd-012-project-pixels-art/pull/5
