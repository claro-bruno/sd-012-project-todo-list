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
            listItems[index].classList.remove('item-selected');            
        }

        if (eventSource.target.classList.contains('completed')) {
            eventSource.target.className = 'list-item item-selected completed'
        } else {
            eventSource.target.classList.add('item-selected');
        }        
    }

    function itemCompleted(eventSource) {
        eventSource.target.classList.toggle('completed');
    }
}