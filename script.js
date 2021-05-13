
const listTask = document.querySelector('#lista-tarefas');
const textTask = document.getElementById('texto-tarefa');
const buttonTask = document.querySelector('#criar-tarefa');

function createTask() {
    buttonTask.addEventListener('click', () => {
    if(textTask.value.length > 0) {
    let addTask = document.createElement('li');
    addTask.innerText = textTask.value;
    addTask.addEventListener('click', createTask);
    listTask.appendChild(addTask);
    textTask.value = '';
        }
    });
};

createTask();

function clickItemList(){
    listTask.addEventListener('click', (event) => {
       const selector = document.querySelector('.selector');
       if (selector !== null) {
           selector.classList.remove('selector');
           selector.removeAttribute('style');
        }
        event.target.classList.add('selector');
    });
};
clickItemList();

function completeTask(){
listTask.addEventListener('dblclick', (event) =>{
    if(event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    }
    else {
        event.target.classList.add('completed');
    }
});
};
completeTask();

function cleanAll(){
    const cleanAll = document.getElementById('apaga-tudo');
    cleanAll.addEventListener('click', () => {
        listTask.innerText = '';
    });
}
cleanAll();

function removeSelect(){
    const cleanSelect = document.getElementById('remover-finalizados');
    cleanSelect.addEventListener('click', () => {
        const cleanTask = document.querySelectorAll('#lista-tarefas li');
        for (index = 0; index < cleanTask.length; index +=1){
            if (cleanTask[index].className.includes('completed')) {
                listTask.removeChild(cleanTask[index]);
            }
        }
    });
}
removeSelect();