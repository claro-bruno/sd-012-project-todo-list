window.onload = function () {   
    document.body.addEventListener('click', function(event){
            if (event.target.id === 'criar-tarefa') {
            let lI = document.createElement('li')
            lI.className = 'task' 
            lI.innerHTML = document.querySelector('#texto-tarefa').value;
            document.getElementById('lista-tarefas').appendChild(lI)
            document.querySelector('#texto-tarefa').value = ""
        }
    }
    )
    document.body.addEventListener('click', function (event){
        let selected = document.querySelectorAll('.selected')
        if (event.target.className === 'task') {
            for (let taskIndex = 0; taskIndex < selected.length; taskIndex += 1) {
            selected[taskIndex].className = 'task'   
            }
            event.target.className = 'task selected'
        }
    }
    )
    document.body.addEventListener('dblclick', function (event) {
        if (event.target.className === 'task selected') {
            event.target.className = 'task selected completed'
        } else if (event.target.className === 'task selected completed') {
            event.target.className = 'task selected'
        }

    })
}