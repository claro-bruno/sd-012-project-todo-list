window.onload = function() {
    //Tentando entender esse vídeo https://www.youtube.com/watch?v=Ttf3CEsEwMQ p ver se consigo aplicar algo aqui.

   //5 e 6
    const inputTask = document.querySelector('#texto-tarefa');
    const creatTaskButton = document.querySelector('#criar-tarefa');
    const taskList = document.querySelector('#lista-tarefas');

    
    function addTask() {
        if (inputTask.value === '') {     //peguei a ideia de fazer if/else em um plantão
            alert ('Escreva uma tarefa.');
        } else {
            const newTask = document.createElement('li');
            newTask.className = 'tarefa';
            newTask.innerHTML =  inputTask.value;
            taskList.appendChild(newTask);
            inputTask.value = '';
            newTask.addEventListener('click', changeToGrey);
            newTask.addEventListener('dblclick', addLineThrough);
        }

    }
    creatTaskButton.addEventListener('click', addTask);

    //7 e 8
    function changeToGrey(event) {
        let taskElement = document.querySelectorAll('.tarefa');
        for (let index = 0; index < taskElement.length; index += 1) {
            taskElement[index].classList.remove('task-background-color');    
        };
        event.target.classList.add('task-background-color');
    } 

    //9
    function addLineThrough(event){
        let taskElement = document.querySelectorAll('.tarefa');
        for (let index = 0; index < taskElement.length; index += 1) {
            taskElement[index].classList.remove('completed');    
        };
        event.target.classList.add('completed');
    }
    
        
    
    

    
    



}