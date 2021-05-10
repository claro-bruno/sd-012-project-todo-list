//CRIA TAREFA
const criarTarefa = document.querySelector('#criar-tarefa');
criarTarefa.addEventListener('click', addTarefa);
function addTarefa(){
    const textoTarefa = document.querySelector('#texto-tarefa').value;
    if (textoTarefa !== '') {
        const addLi = document.createElement('li');
        addLi.innerHTML = textoTarefa;
        addLi.classList.add('listIten');
        addLi.addEventListener('click', selected);
       
        document.querySelector('#lista-tarefas').appendChild(addLi);
        document.querySelector('#texto-tarefa').value = '';
    } else {
        alert('Adicione uma tarefa')
    };
};

//SELECIONA ITEM DA LISTA
function selected(event) {
    event.target.classList.add('selected');
};

// clearSelected = document.querySelector('.selected');
// if (event.target.classList === clearSelected.classList) {
//     clearSelected.classList.remove('selected');
// };
    
    




//APAGA TUDO
const deleteAll = document.querySelector('#apaga-tudo');
deleteAll.addEventListener('click', limpaTarefa);
function limpaTarefa (){
    const itensList = document.querySelector('#lista-tarefas');
    itensList.innerText = '';
};


