window.onload = function() {
    let addButton = document.getElementById('criar-tarefa');
    let taskInput = document.getElementById('texto-tarefa');
    let taskList = document.getElementById('lista-tarefas');    

    addButton.addEventListener('click', addTask);

    function addTask() {        
        let listItem = document.createElement('li');        
        listItem.className = 'list-item';
        listItem.innerHTML = taskInput.value;
        listItem.addEventListener('click', selectItem);
        listItem.addEventListener('dblclick', itemCompleted);
        taskInput.value = '';
        taskList.appendChild(listItem);

        //getListItems();
    }
/*
    function getListItems() {
        listItems = document.querySelectorAll('.list-item');
        console.log(listItems);
        for (let index = 0; index < listItems.length; index += 1) {
            listItems[index].addEventListener('click', selectItem); 
            listItems[index].addEventListener('dblclick', itemCompleted);
        }
    }
*/
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
}