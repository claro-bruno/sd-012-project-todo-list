window.onload = function() {
    let addButton = document.getElementById('criar-tarefa');
    let clearListBtn = document.getElementById('apaga-tudo');
    let clearCompletedBtn = document.getElementById('remover-finalizados');
    let taskInput = document.getElementById('texto-tarefa');
    let taskList = document.getElementById('lista-tarefas');    

    addButton.addEventListener('click', addTask);
    clearListBtn.addEventListener('click', clearList);
    clearCompletedBtn.addEventListener('click', clearCompleted);

    function addTask() {        
        let listItem = document.createElement('li');        
        listItem.className = 'list-item';
        listItem.innerHTML = taskInput.value;
        listItem.addEventListener('click', selectItem);
        listItem.addEventListener('dblclick', itemCompleted);
        taskInput.value = '';
        taskList.appendChild(listItem);        
    }

    function selectItem(eventSource) {
        let listItems = document.querySelectorAll('.list-item');

        for (let index = 0; index < (listItems.length); index += 1) {
            listItems[index].classList.remove('item-selected');            
        }
        
        eventSource.target.classList.add('item-selected');
               
    }

    function itemCompleted(event) {
        event.target.classList.toggle('completed');
    }

    function clearList() {
        let listItems = document.querySelectorAll('.list-item');

        for (let index = 0; index < listItems.length; index += 1) {
            taskList.removeChild(listItems[index]);
        }
    }

    function clearCompleted() {
        let completedItems = document.querySelectorAll('.completed');
        
        for (let index = 0; index < completedItems.length; index += 1) {
            taskList.removeChild(completedItems[index]);
        }        
    }
}