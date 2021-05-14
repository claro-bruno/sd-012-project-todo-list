const selectButton = document.querySelector('#criar-tarefa');
const selectInput = document.querySelector('#texto-tarefa');
const addOl = document.querySelector('#lista-tarefas');

function addTasks () {

    selectButton.addEventListener('click', function () {

        if (selectInput.value != 0) {
            const createTask = document.createElement('li');
            createTask.innerHTML = selectInput.value;
            selectInput.value = '';
            createTask.classList.add('task');
            addOl.appendChild(createTask);
        } else {
            window.alert("Não é possível criar uma tarefa vazia!")
        };
    });
};

addTasks();

function backgroundGrey () {
    const task = document.querySelectorAll('.task');
    for (let indexBackground = 0; indexBackground < task.length; indexBackground += 1) {
        if (task[indexBackground].classList.contains('selected')) {
            task[indexBackground].style.backgroundColor = 'rgb(128,128,128)';
        } else {
            task[indexBackground].style.backgroundColor = '#deb887'
        };
    };
};

function selectTask () {
    addOl.addEventListener('click', function (eventSelect) {
        const taskSelected = document.querySelector('.selected');

        if (taskSelected !== null) {
            taskSelected.classList.remove('selected');
        } 
        eventSelect.target.classList.add('selected');
        backgroundGrey(); 
    });
};

selectTask();

const clearButton = document.querySelector('#apaga-tudo');

function taskClear() {

  clearButton.addEventListener('click', () => {

    const tasks = document.querySelector('#lista-tarefas');
    while (tasks.hasChildNodes()) {
      tasks.removeChild(tasks.firstChild);
    }
  });
}

taskClear();

function lineThrough () {

    const taskThrough = document.querySelectorAll('.task');

    for (let indexLineThrough = 0; indexLineThrough < taskThrough.length; indexLineThrough += 1) {
        if (taskThrough[indexLineThrough].classList.contains('completed')) {
            taskThrough[indexLineThrough].style.textDecoration = 'line-through solid black';
        } else {
            taskThrough[indexLineThrough].style.textDecoration = '';
        };
    };
};

lineThrough();

function completedTask () {

    addOl.addEventListener('dblclick', function (eventComplet) {
        
        eventComplet.target.classList.toggle('completed');
        lineThrough();
    });
};

completedTask();

const removeButton = document.querySelector('#remover-finalizados');

removeButton.addEventListener('click', function () {
    
    const taskRemove = document.querySelectorAll('.completed');
    for (let indexRemove = 0; indexRemove < taskRemove.length; indexRemove += 1) {
        taskRemove[indexRemove].parentNode.removeChild(taskRemove[indexRemove]);
    };
});
