window.onload = () => {
    
    const getList = getById('lista-tarefas');
    const newTask = document.createElement('li');
    if (localStorage.getItem('tasks') != null) getList.innerHTML = localStorage.getItem('tasks');
    selectTask();
    selectTaskCompleted();
    cleanAllList();
    deleteCompleteds();
    saveButton ();
    moveUP();
    moveDown();
    deleteSelected();

    const add = getById('criar-tarefa');
    const getInput = getById('texto-tarefa');

    add.addEventListener('click', () => {
        if (getInput.value.length > 0){
            addToList();
        } else {
            alert("Insira uma tarefa! ");
        }
    });
    // Listener para adicionar com a tecla Enter \\
    getInput.addEventListener('keyup', (e) => {
        if((e.key ==='Enter') && (getInput.value.length > 0)){
            addToList();
        } else if (getInput.value.length === 0) {
            alert("Insira uma tarefa! ");
        }
    });
}
    function getById(id) {
        const getElement = document.getElementById(id);
        return getElement;
    }
    
    function getTask() {
        const getInput = getById('texto-tarefa');
        const task = getInput.value;
        getInput.value = '';
        return task;
    }

    function addToList() {
        const getList = getById('lista-tarefas');
        const newTask = document.createElement('li');
        newTask.innerHTML = getTask();
        newTask.className = "tasks";
        getList.appendChild(newTask);
        selectTask();
        selectTaskCompleted();
        cleanAllList();
        deleteCompleteds();
        saveButton ();
        moveUP();
        moveDown();
        deleteSelected();
    }



    function checkTask(e) {
        const getTaskSelected = document.querySelector('.selected');
        if (getTaskSelected !== null) {
            getTaskSelected.classList.remove('selected');
            getTaskSelected.style.backgroundColor = 'white';
        }
        e.target.classList.add('selected');
        e.target.style.backgroundColor = 'rgb(128, 128, 128)';   
    }

    function selectTask() {
        const selectTasksLi = document.getElementsByClassName('tasks');
        for (let tasksLi of selectTasksLi ){
            tasksLi.addEventListener('click', checkTask);
        }     
    }

    //Riscar item
    function checkTaskCompleted(e) {  
            e.target.classList.toggle('completed');
    }

    function selectTaskCompleted() {
        const selectTasksLi = document.getElementsByClassName('tasks');
        for (let tasksLi of selectTasksLi ){
            tasksLi.addEventListener('dblclick', checkTaskCompleted);
        }     
    }
    
   function cleanList() {
       const selectOl = document.getElementById('lista-tarefas');
       while (selectOl.firstChild != null) {
           selectOl.firstChild.remove();
       }
   }

   function cleanAllList() {
    const cleanButton = document.getElementById('apaga-tudo');
    cleanButton.addEventListener('click', cleanList);
   }

   function completeList() {
    const selectTasksCompleted = document.getElementsByClassName('completed');
        while (selectTasksCompleted.length > 0){
            selectTasksCompleted[0].remove();
        }
    }
    
    function deleteCompleteds() {
        const cleanButton = document.getElementById('remover-finalizados');
        cleanButton.addEventListener('click', completeList);
    }
   
    function saveList() {
        const selectOl = document.getElementById('lista-tarefas');
        const taskList = selectOl.innerHTML;
        localStorage.setItem('tasks',taskList);
        alert('Lista salva com sucesso!')
    }
    function saveButton () {
        const saveListButton = document.getElementById('salvar-tarefas');
        saveListButton.addEventListener('click', saveList);
    }
    function moveDownAux() {
        const selectOl = document.getElementById('lista-tarefas');
        const getTaskSelected = document.querySelector('.selected');
        if ((getTaskSelected != null) && (getTaskSelected !== selectOl.lastElementChild)){
            const nextTask = getTaskSelected.nextElementSibling;
            selectOl.insertBefore(getTaskSelected, nextTask.nextElementSibling);
        }
    }
    function moveUPAux() {
        const selectOl = document.getElementById('lista-tarefas');
        const getTaskSelected = document.querySelector('.selected');
        if ((getTaskSelected != null) && (getTaskSelected !== selectOl.firstElementChild)){
            const prevTask = getTaskSelected.previousElementSibling;
            selectOl.insertBefore(getTaskSelected, prevTask);
        }
    }
    function moveDown(){
        const moveDownButton = document.getElementById('mover-baixo');
        moveDownButton.addEventListener('click', moveDownAux);
    }
    function moveUP() {
        const moveUPButton = document.getElementById('mover-cima');
        moveUPButton.addEventListener('click', moveUPAux);
    }

    function deleteSelectedAux() {
        const getTaskSelected = document.querySelector('.selected');
        if (deleteSelected != null) getTaskSelected.remove();
    }
    function deleteSelected() {
        const deleteButton = document.getElementById('remover-selecionado');
        deleteButton.addEventListener('click', deleteSelectedAux);
    }

