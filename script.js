//CRIA TAREFA
const criarTarefa = document.querySelector('#criar-tarefa');
criarTarefa.addEventListener('click', newAssignment);
function newAssignment(){
    const textoTarefa = document.querySelector('#texto-tarefa').value;
    if (textoTarefa !== '') {
        const addLi = document.createElement('li');
        addLi.innerHTML = textoTarefa;
        addLi.classList.add('listItem');
        document.querySelector('#lista-tarefas').appendChild(addLi);
        document.querySelector('#texto-tarefa').value = '';
    } else {
        alert('Adicione uma tarefa')
    };
};


//APAGA TUDO
const deleteAll = document.querySelector('#apaga-tudo');
deleteAll.addEventListener('click', limpaTarefa);
function limpaTarefa (){
    const itensList = document.querySelector('#lista-tarefas');
    itensList.innerText = '';
};
