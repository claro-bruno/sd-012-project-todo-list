function addTask() {
    let input = document.getElementById('texto-tarefa');
    let buttonAdd = document.getElementById('criar-tarefa');
    let list = document.getElementById('lista-tarefas');
    buttonAdd.addEventListener('click', () => {
        let taskLi = document.createElement('li');
        taskLi.innerHTML = input.value;
        taskLi.classList.add('item-lista');
        input.value = '';
        list.appendChild(taskLi);
    })
}
addTask();

function removeClassSelected() {
    let elementSelected = document.querySelector('.selected');
    if (elementSelected !== null) {
        elementSelected.classList.remove('selected');
    }
}

function selectedItems() {
    let list = document.querySelector('#lista-tarefas');
    list.addEventListener('click', (event) => {
        let evento = event;
        removeClassSelected();
        evento.target.classList.add('selected');
    })
}
selectedItems();

function completedTask() {
    let list = document.querySelector('#lista-tarefas');
    list.addEventListener('dblclick', (event) => {
        let evento = event;
        if (evento.target.classList.contains('completed')) {
            evento.target.classList.remove('completed');
        } else {
            evento.target.classList.add('completed');
        }
    })
}
completedTask();

function clearList() {
    let list = document.getElementById('lista-tarefas');
    let buttonClear = document.getElementById('apaga-tudo');
    buttonClear.addEventListener('click', () => {
        list.innerHTML = '';
    })
}
clearList();

function clearCompleted() {
    let list = document.getElementById('lista-tarefas');
    let buttonCompleted = document.getElementById('remover-finalizados');
    buttonCompleted.addEventListener('click', () => {
        let completedItems = document.querySelectorAll('.completed');
        for (let index = 0; index < completedItems.length; index += 1) {
            list.removeChild(completedItems[index]);
        }
    })
}
clearCompleted();