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
        }
    }
    creatTaskButton.addEventListener('click', addTask);

    //7
    
   


}