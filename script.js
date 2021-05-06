    // Será verificado que, ao se carregar a página, os itens da lista não tem o estilo CSS background-color: rgb(128, 128, 128)

    // Será verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS background-color: rgb(128, 128, 128)

function addLista(){
  let criarTarefa = document.querySelector('#criar-tarefa');
  let listaDeTarefa = document.querySelector('#lista-tarefas');
  criarTarefa.addEventListener('click', function(){
    let textoTarefa = document.querySelector('#texto-tarefa').value;
    let itemLista = document.createElement('li');
    itemLista.innerHTML = textoTarefa;
    itemLista.className = 'item-lista'
    itemLista.addEventListener('click',alteraCorDeFundo)
    listaDeTarefa.appendChild(itemLista)
    textoTarefa = document.querySelector('#texto-tarefa').value = '';
  });
}

function alteraCorDeFundo(){

let itemLista = document.querySelectorAll('.item-lista')
    for (let i =0;i<itemLista.length ; i+= 1){
      if(itemLista[i].id == 'selected')  
      itemLista[i].id = ''
      else 
      itemLista[i].id = 'selected'
}
}

addLista();

