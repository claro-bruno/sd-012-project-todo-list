function unmarkTask(){
    let selectedTask = document.querySelector('#selected');
    selectedTask.id = '';
}

function changeTaskColor(){
    let taskList = document.querySelector('#lista-tarefas');
    taskList.addEventListener('click', (e)=>{
        if(e.target.className === 'tarefa'){
            if(document.querySelector('#selected') !== null){
                unmarkTask();
                console.log('   hceugie')
            }
            e.target.id = 'selected';
        };
    });
}

function createTask() {
  let btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', () => {
    let input = document.querySelector('#texto-tarefa');
    let task = document.createElement('li');
    task.className = 'tarefa';
    task.innerHTML = input.value;
    input.value = '';
    let list = document.querySelector('#lista-tarefas');
    list.appendChild(task);
    
  });
}

window.onload = () => {
    createTask();
    changeTaskColor();
};
