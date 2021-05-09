


const criarTarefa = document.querySelector('#criar-tarefa');
criarTarefa.addEventListener('click', newAssignment)

function newAssignment(){
    const textoTarefa = document.querySelector('#texto-tarefa').value;
    if (textoTarefa !== '') {
        const addLi = document.createElement('li');
        addLi.innerHTML = textoTarefa;
        addLi.classList.add('listItem');
        document.querySelector('#lista-tarefas').appendChild(addLi);
    } else {
        alert('Adicione uma tarefa')
    };
};

