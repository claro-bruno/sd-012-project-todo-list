window.onload = function(){
    const input = document.getElementById('texto-tarefa');
    const button = document.getElementById('criar-tarefa');

    button.addEventListener("click", addTask);

    function addTask() {
        const listParent = document.getElementById('lista-tarefas');
        const addItem = document.createElement('li');
        addItem.innerText = input.value;
        listParent.appendChild(addItem);
        input.value = '';
    }
};