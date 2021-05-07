window.onload = function() {

    const inputBox = document.querySelector("#input-box");
    const createButton = document.querySelector("#criar-tarefa");
    const input = document.querySelector('input');
    const list = document.querySelector('ol');
    const clearAll = document.querySelector('#apaga-tudo');
    const clearCompleted = document.querySelector('#remover-finalizados');
    const darkMode = document.querySelector('#dark-mode');
    let mode = 'light';

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
        let taskLength = document.querySelectorAll('li').length;
        for (let index = 0; index < taskLength; index += 1) {
            if( document.querySelectorAll('li')[index].classList.contains('selected')){
                document.querySelectorAll('li')[index].classList.remove('selected');
            }
        }
        let target = event.target;
        target.classList.toggle('selected');
    });

    // Task Completion
    list.addEventListener('dblclick', function (event) {
        let target = event.target;
        target.classList.toggle('completed');
    })

    // Clear All
    clearAll.addEventListener('click', function() {
        while (list.lastElementChild) {
            list.removeChild(list.lastElementChild);
        }
    })

    // Clear Completed
    clearCompleted.addEventListener('click', function () {
        let tasks = document.querySelectorAll('li');
        for (let child = 0; child < tasks.length; child += 1) {
            if (tasks[child].classList.contains('completed')) {
                tasks[child].remove();
            }
        }
    })

    // Dark Mode
    darkMode.addEventListener('click', function() {
        if (mode === 'light') {
            let link = document.querySelector('link');
            link.setAttribute('href', 'styleDark.css');
            darkMode.innerHTML = 'Light Mode';
            mode = 'dark';
        } else {
            let link = document.querySelector('link');
            link.setAttribute('href', 'style.css');
            darkMode.innerHTML = 'Dark Mode';
            mode = 'light';
        }
    })
}