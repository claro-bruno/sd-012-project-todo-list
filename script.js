const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const listParent = document.getElementById('lista-tarefas');
const listItens = document.querySelectorAll('.task-item')

button.addEventListener("click", function() {
    const addItem = document.createElement('li');
    addItem.className = 'task-item';
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

const listaOrdenada = document.querySelector('#lista-tarefas');
listaOrdenada.addEventListener('dblclick', (evento) => {
    if (evento.target.classList.contains('completed')) {
        evento.target.classList.remove('completed')
    } else {
        evento.target.classList.add('completed');
    }
});

const deleteButton = document.getElementById('apaga-tudo');
deleteButton.addEventListener('click', function () {
    let itensLista = document.querySelector('#lista-tarefas')
        itensLista.innerText = '';
})

const deletecheckButton = document.getElementById('remover-finalizados');
deletecheckButton.addEventListener('click', function () {
    let itenscheckedLista = document.querySelectorAll('.completed')
    for (let index = 0; index < itenscheckedLista.length; index += 1)
        itenscheckedLista[index].remove();
});

document.addEventListener('click', (event) => {
    if (event.target.id === 'salvar-tarefas') {
      localStorage.setItem('key', listParent.innerHTML);
    }
});

window.onload = function initialD() {
    if (localStorage.getItem('key') !== null) {
        listParent.innerHTML += localStorage.getItem('key');
    }
};

