window.onload = function() {

    const inputBox = document.querySelector("#input-box");
    const createButton = document.querySelector("#criar-tarefa");
    const input = document.querySelector('input');
    const list = document.querySelector('ol');

    // Task Add by Input
    createButton.addEventListener('click', function () {
        let inputText = input.value;
        let task = document.createElement('li');
        task.innerHTML = inputText;
        task.className = 'task';
        list.appendChild(task);
        input.value = '';
    })

    // Task Selection
    list.addEventListener('click', function(event) {
        let target = event.target;
        target.classList.toggle('selected');
    });  
}