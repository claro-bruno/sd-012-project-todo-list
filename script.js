window.onload = () => {
    
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
    }

    const add = getById('criar-tarefa');
    const getInput = getById('texto-tarefa');

    add.addEventListener('click', () => {
        if (getInput.value.length > 0) addToList();
    });
    // Listener para adicionar com a tecla Enter \\
    getInput.addEventListener('keyup', (e) => {
        if((e.key ==='Enter') && (getInput.value.length > 0))  addToList();
    });
    
    function checkTask(e){
        const getTaskSelected = document.querySelector('.selected');
        if (getTaskSelected !== null) {
            getTaskSelected.classList.remove('selected');
            getTaskSelected.style.backgroundColor = 'white';
        }
        e.target.classList.add('selected');
        e.target.style.backgroundColor = 'rgb(128, 128, 128)';   
    }

    function selectTask(){
        const selectTasksLi = document.getElementsByClassName('tasks');
        for (let tasksLi of selectTasksLi ){
            tasksLi.addEventListener('click', checkTask);
        }     
    }

    //Riscar item

    function checkTaskCompleted(e){  
            e.target.classList.toggle('completed');
    }

    function selectTaskCompleted(){
        const selectTasksLi = document.getElementsByClassName('tasks');
        for (let tasksLi of selectTasksLi ){
            tasksLi.addEventListener('dblclick', checkTaskCompleted);
        }     
    }
    
   

}
