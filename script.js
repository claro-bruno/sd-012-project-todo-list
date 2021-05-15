 window.onload = paginaCarregada();

 function addLista(){
   let criarTarefa = document.querySelector('#criar-tarefa');
   let listaDeTarefa = document.querySelector('#lista-tarefas');
   criarTarefa.addEventListener('click', function(){
     let textoTarefa = document.querySelector('#texto-tarefa');
     let itemLista = document.createElement('li');
     itemLista.innerHTML = textoTarefa.value;
     itemLista.className = 'item-lista';
     itemLista.addEventListener('click',alteraCorDeFundo);
     itemLista.addEventListener('dblclick', completado);
     listaDeTarefa.appendChild(itemLista);
     textoTarefa.value =  '';
   });

   let textoTarefa = document.querySelector('#texto-tarefa');
   textoTarefa.addEventListener('keyup', (event) => {
     if(event.keyCode === 13){
       document.querySelector("#criar-tarefa").click();
     }
   })
  }
  addLista();


 function alteraCorDeFundo(event){
   let selected = document.querySelector('.selected');
    if (selected !== null) { 
      selected.classList.remove('selected');
     event.target.classList.add('selected');
    } else { event.target.classList.add('selected');
        } 
 }

function completado(event){
  if(event.target.className.includes('completed'))
    event.target.className = 'item-lista';
  else
    event.target.className += ' completed';
}


function botaoApagar(){
  let botao = document.createElement('button');
  botao.innerHTML = 'Apagar';
  botao.id = 'apaga-tudo';
  botao.addEventListener('click', apagar);
  document.body.appendChild(botao);
}
botaoApagar();

function apagar(){
  let itemlista = document.querySelectorAll('.item-lista');
  let pai = document.querySelector('#lista-tarefas');
    for(let i = 0;i < itemlista.length; i += 1){
      pai.removeChild(itemlista[i]);
    }
}


function botaoFinalizados(){
  let botaofinalizar = document.createElement('button');
  botaofinalizar.innerHTML = 'Apagar Finalizados';
  botaofinalizar.id = 'remover-finalizados';
  botaofinalizar.addEventListener('click', finalizar);
  document.body.appendChild(botaofinalizar);
}
botaoFinalizados()

function finalizar(){
  let completados = document.querySelectorAll('.completed');
  let pai = document.querySelector('#lista-tarefas');
    for(let i = 0;i < completados.length; i += 1){
      pai.removeChild(completados[i]);
    }
}


 function botaoSalvar() {
   let btn = document.querySelector('#salvar-tarefas');

   btn.addEventListener('click', () => {
   let itens =  document.querySelectorAll('.item-lista');
   let listaObjeto = [];
   let listaClass = [];
   for(let i =0; i < itens.length ; i += 1){
     listaObjeto.push(itens[i].innerHTML);
     listaClass.push(itens[i].className);
     localStorage.setItem("lista"+i, listaObjeto[i]);
     localStorage.setItem("class"+i, listaClass[i]);
   }
 })
 }
 botaoSalvar()
 function paginaCarregada() {

  for(let i =0; i < localStorage.length/2 ; i += 1){
    let listaDeTarefa = document.querySelector('#lista-tarefas');
     let conteudo = localStorage.getItem("lista"+i);
     let classe =  localStorage.getItem("class"+i)

     let textoTarefa = document.querySelector('#texto-tarefa');
     let itemLista = document.createElement('li');
      itemLista.innerHTML = conteudo;
      itemLista.className = classe;
      itemLista.addEventListener('click',alteraCorDeFundo);
      itemLista.addEventListener('dblclick', completado);
      listaDeTarefa.appendChild(itemLista);
      textoTarefa.value = '';
   }
   
 }

 function moveCima() {
   let btn = document.querySelector("#mover-cima")
   btn.addEventListener('click',() => {
        let pai = document.querySelector('#lista-tarefas')
        let item = document.querySelector('.selected')
        let itemAnterior = item.previousElementSibling

        if(itemAnterior === null){
          pai.insertBefore(item, pai.firstChild)
        }else {
          pai.insertBefore(item, itemAnterior)
        }        
})
 }
 moveCima()
function insertAfter(newNode,existingNode  ){
  return existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
  function moveBaixo() {
   let btn = document.querySelector("#mover-baixo")
   btn.addEventListener('click',() => {
     let item = document.querySelector('.selected')
     let proximoItem = item.nextElementSibling
     let pai = item.parentElement

        if(proximoItem === null){
          pai.insertBefore(item, pai.lastChild)
        }else {
          pai.insertBefore(item, item.nextElementSibling.nextElementSibling)
        }        
})
 }
 moveBaixo()