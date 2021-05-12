const creatList = document.getElementById('criar-tarefa');

function addtolist(event){
    let li = document.createElement('li');
    li.className = 'toDO';
    li.innerHTML = document.querySelector('#texto-tarefa').value;
    document.getElementById('lista-tarefas').appendChild(li);
    document.querySelector('#texto-tarefa').value = '';
}

creatList.addEventListener('click', addtolist);