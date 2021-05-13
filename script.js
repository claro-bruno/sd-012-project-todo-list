const selectButton = document.querySelector('#criar-tarefa');
const selectInput = document.querySelector('#texto-tarefa');
const addOl = document.querySelector('#lista-tarefas');

function addTasks () {

    selectButton.addEventListener('click', function () {

        if (selectInput.value != 0) {
                const createTask = document.createElement('li');
                createTask.innerText = selectInput.value;
                selectInput.value = '';
                addOl.appendChild(createTask);
        } else {
            window.alert("Não é possível criar uma tarefa vazia!")
        }
    })
}

addTasks();