function addTask() {
    let input = document.getElementById('texto-tarefa');
    let button = document.getElementById('criar-tarefa');
    let list = document.getElementById('lista-tarefas');
    button.addEventListener('click', () => {
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
    console.log(elementSelected)
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