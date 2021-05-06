window.onload = function(){
    const input = document.getElementById('texto-tarefa');
    const button = document.getElementById('criar-tarefa');
    const listParent = document.getElementById('lista-tarefas');

    button.addEventListener("click", function() {
        const addItem = document.createElement('li');
        addItem.innerText = input.value;
        listParent.appendChild(addItem);
        input.value = '';
    });

    

    function chooseTaks(event) {
        const taskSelected = document.querySelector('.selected');
        if (taskSelected !== null) {
            taskSelected.classList.remove('selected');
        };
        event.target.classList.add('selected');
    };
    listParent.addEventListener('click', chooseTaks);

};