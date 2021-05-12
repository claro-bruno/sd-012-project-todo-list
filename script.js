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
        addLi.addEventListener('dblclick', concluded);
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

//ITEM 9 RISCAR TAREFA COM DOUBLE CLICK
function concluded (event){
  if(event.target.classList !== '.completed'){
    event.target.classList.toggle('completed')
    //     event.target.classList.add('completed');
    //     console.log('add');
    // } else {
    //     event.target.classList.remove('completed');
    //     console.log('remove')
        
  };
    
};
        
//REMOVE ITEM SELECIONADO
const removeSelecionado = document.querySelector('#remover-selecionado');
removeSelecionado.addEventListener('click', removeTarefa);
function removeTarefa() {
    const tarefa = document.querySelector('.selected');
    tarefa.remove()
};

//APAGA TUDO
const deleteAll = document.querySelector('#apaga-tudo');
deleteAll.addEventListener('click', limpaTarefa);
function limpaTarefa (){
    const itensList = document.querySelector('#lista-tarefas');
    itensList.innerText = '';
};

