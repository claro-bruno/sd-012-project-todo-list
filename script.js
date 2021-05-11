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
            newTask.addEventListener('click', changeToGrey);   //essa e a de baixo eu já adicionei o escutador para as funções do 7 e 9.
            newTask.addEventListener('dblclick', addLineThrough);
        }

    }
    creatTaskButton.addEventListener('click', addTask);

    //7 e 8 
    //Os meninos, Gabriel, Caio, Thalles e o Bruno me ajudaram a pensar assim: Primeiro selecionar/coletar, depois adicionar o escutador e pr fim fazer uma função para falar o q vai acontecer depois de eu clicar (ou qq outro evento).
    function changeToGrey(event) {
        let taskElement = document.querySelectorAll('.tarefa');
        for (let index = 0; index < taskElement.length; index += 1) {
            taskElement[index].classList.remove('task-background-color');    //A classList retorna uma array
        };
        event.target.classList.add('task-background-color');
    } 

    //9
    function addLineThrough(event){
        if(event.target.classList.value.includes('completed')) { // Ele está usando o includes p ver se ao longo da array q contem as classes, tem alguma pálavra 'completed'
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        }
    }
    
    //10
    let apagaTudoButton = document.querySelector('#apaga-tudo');

    function clearAll() {
        while (taskList.firstChild) {  //tudo dentro do parentes ele já checa se é true
           taskList.removeChild(taskList.firstChild);
        } 
    }
    apagaTudoButton.addEventListener('click', clearAll); 
    
    



}