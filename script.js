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
            listItems[index].addEventListener('dblclick', itemCompleted);
        }
    }

    function selectItem(eventSource) {
        for (let index = 0; index < (listItems.length); index += 1) {
            if (!listItems[index].classList.contains('completed')) {
                listItems[index].className = 'list-item';
            } else {
                listItems[index].classList.remove('item-selected');
            }
        }

        eventSource.target.classList.add('item-selected');
    }

    function itemCompleted(eventSource) {
        if (!eventSource.target.classList.contains('completed')) {
            eventSource.target.classList = 'completed';
        } else {
            eventSource.target.classList.remove('completed');
        }        
    }
}