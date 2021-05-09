window.onload = function() {
    //Estava tendo mta dificuldade fiz e refiz de várias maneiras. Até que achei esse vídeo no youtube: https://www.youtube.com/watch?v=Ttf3CEsEwMQ


    //Selectors
    const inputTask = document.querySelector('#texto-tarefa');
    const creatTaskButton = document.querySelector('#criar-tarefa');
    const taskList = document.querySelector('#lista-tarefas');

    //EventListeners
    creatTaskButton.addEventListener('click', addTask);

    //Functions
    function addTask(event) {
        const newTask = document.createElement('li');
        newTask.className = 'tarefa';
        newTask.innerHTML =  inputTask.value;
        taskList.appendChild(newTask);
    }


    // let taskButton = document.querySelector('#task-button');

    // function addTask(inputTask) {
    //     // let task = document.querySelector('#task-text');
    //     if (inputTask.value === '') {
    //         alert ('Insira uma nova tarefa.');
    //     } else {
    //         const olTaskList = document.querySelector('#task-list');
    //         const task = document.createElement('li');
    //         task.innerHTML = inputTask;
    //         olTaskList.appendChild(task);
    //         inputTask.value = '';
    //     }

    //     let taskButton = document.querySelector('#task-button');
        
    //     taskButton.addEventListener('click', function(event){
    //         if(event.target.id === 'task-button') {
                
    //         }
    //     })
    // }
 

   


}