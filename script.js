window.onload = function () {   
    document.body.addEventListener('click', function(event){
        if (event.target.id === 'criar-tarefa') {
            let lI = document.createElement('li') 
        lI.innerHTML = document.querySelector('#texto-tarefa').value;
        document.getElementById('lista-tarefas').appendChild(lI)
        document.querySelector('#texto-tarefa').value = ""
        }
    }
    )
}