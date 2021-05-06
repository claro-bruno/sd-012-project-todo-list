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
        getList.appendChild(newTask);
    }
    const add = getById('criar-tarefa');
    const getInput = getById('texto-tarefa');

    add.addEventListener('click', () => {
        if (getInput.value.length > 0) addToList();
    });
    getInput.addEventListener('keyup', (e) => {
        if((e.key ==='Enter') && (getInput.value.length > 0))  addToList();
    });
    

}
