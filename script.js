function changeTaskColor(){
    let tasks = document.querySelectorAll('.tarefa');
    for(let indexTask = 0;indexTask < tasks.length; indexTask += 1){
        let task = tasks[indexTask];
        task.addEventListener('click', ()=>{
            task.style.backgroundColor = 'rgb(128,128,128)';
        });
    };
};

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
    changeTaskColor();
  });
};

window.onload = () => {
    createTask();
};
