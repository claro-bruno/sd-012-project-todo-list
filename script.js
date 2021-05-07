window.onload = function() {
    let addButton = document.getElementById('criar-tarefa');
    let taskInput = document.getElementById('texto-tarefa');
    let taskList = document.getElementById('lista-tarefas');
    let listItems;

    addButton.addEventListener('click', addTask);

    function addTask() {        
        let listItem = document.createElement('li');
        listItem.className = 'list-item';
        listItem.innerHTML = taskInput.value;
        taskInput.value = '';
        taskList.appendChild(listItem);

        getListItems();
    }

    function getListItems() {
        listItems = document.getElementsByClassName('list-item');        
        
        for (let index = 0; index < listItems.length; index += 1) {
            listItems[index].addEventListener('click', selectItem);
        }
    }

    function selectItem(eventSource) {        
        for (let index = 0; index < (listItems.length); index += 1) {
            listItems[index].className = 'list-item';
        }

        eventSource.target.className = 'list-item item-selected';
    }
}