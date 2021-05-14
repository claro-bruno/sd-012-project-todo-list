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
     itemLista.addEventListener('dblclick', completado)
     listaDeTarefa.appendChild(itemLista)
     textoTarefa = document.querySelector('#texto-tarefa').value = '';
   });
 }
addLista();

 function alteraCorDeFundo(event){
 let itemLista = document.querySelectorAll('.item-lista')
     for (let i =0;i<itemLista.length ; i+= 1){
       if(itemLista[i].id == 'selected')
        itemLista[i].id = ''
       else 
        event.target.id= 'selected'
 }
 }

function completado(event){
  if(event.target.className.includes('completed'))
    event.target.className = 'item-lista'
  else
    event.target.className += ' completed'
}


function botaoApagar(){
  let botao = document.createElement('button')
  botao.innerHTML = 'Apagar'
  botao.id = 'apaga-tudo'
  botao.addEventListener('click', apagar)
  document.body.appendChild(botao)
}
botaoApagar()

function apagar(){
  let itemlista = document.querySelectorAll('.item-lista')
  let pai = document.querySelector('#lista-tarefas')
    for(let i = 0;i < itemlista.length; i += 1){
      pai.removeChild(itemlista[i])
    }
}


function botaoFinalizados(){
  let botaofinalizar = document.createElement('button')
  botaofinalizar.innerHTML = 'Apagar Finalizados'
  botaofinalizar.id = 'remover-finalizados'
  botaofinalizar.addEventListener('click', finalizar)
  document.body.appendChild(botaofinalizar)
}
botaoFinalizados()

function finalizar(){
  let completados = document.querySelectorAll('.completed')
  let pai = document.querySelector('#lista-tarefas')
    for(let i = 0;i < completados.length; i += 1){
      pai.removeChild(completados[i])
    }
}
