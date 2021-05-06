window.onload = function(){
    let button = document.getElementById('criar-tarefa')
    let list = document.getElementById('lista-tarefas') 
    let taskName = document.getElementById('texto-tarefa')

    button.addEventListener('click', () => {
        let newTask = document.createElement('li')
        newTask.innerText = taskName.value
        list.appendChild(newTask)
        taskName.value = ''
    })

}