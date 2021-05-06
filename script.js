window.onload = function() {

    const addButton = document.querySelector("#add-button");
    const inputBox = document.querySelector("#input-box");
    const createButton = document.querySelector("#criar-tarefa");
    const input = document.querySelector('input');
    const list = document.querySelector('ol');

    // Dynamic Input Field
    addButton.addEventListener('click', function () {
        inputBox.style.display = 'block'; 
    });

    // Task Add by Input
    createButton.addEventListener('click', function () {
        let inputText = input.value;
        let task = document.createElement('li');
        task.innerHTML = inputText;
        list.appendChild(task);
        inputBox.style.display = 'none';
        input.value = '';
    })
}