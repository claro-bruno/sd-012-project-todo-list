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
    const selectedChange = document.querySelector('.selected');
    if (selectedChange){
        selectedChange.classList.remove('selected');
    };
    event.target.classList.add('selected');    
};
        
//REMOVE ITEM DA LISTA
const removeSelecionado = document.querySelector('#remover-selecionado');
removeSelecionado.addEventListener('click', removeTarefa);
function removeTarefa() {
    const tarefa = document.querySelector('.selected');
    tarefa.innerText = '';
};

//APAGA TUDO
const deleteAll = document.querySelector('#apaga-tudo');
deleteAll.addEventListener('click', limpaTarefa);
function limpaTarefa (){
    const itensList = document.querySelector('#lista-tarefas');
    itensList.innerText = '';
};