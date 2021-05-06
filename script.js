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
        paintLi();
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
    
    function paintLi(){
        const getTasksArray = document.getElementsByClassName('tasks');
        if(getTasksArray.length > 0){
            for(let i = 0; i < getTasksArray.length; i += 1){
                getTasksArray[i].addEventListener('click', (e) => {
                        e.target.style.backgroundColor = 'rgb(128, 128, 128)';
                })
            }
        }
    }
       
    
   

}
