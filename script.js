//
//button id = criar-tarefa
//input id = texto-tarefa
//ol id = lista-tarefas

const botao = document.getElementById('criar-tarefa');

function aperte() {
  const olist = document.getElementById('lista-tarefas');
  let valorInput = document.getElementById('texto-tarefa');
  let novoItem = document.createElement('li');
  novoItem.className = 'item-list';
  novoItem.innerText = valorInput.value;
  novoItem.addEventListener('click', corCinza)
  novoItem.addEventListener('dblclick', doubleClick)
  if (valorInput.value !== '') {
    olist.appendChild(novoItem);
    valorInput.value = '';
    
  }
}

botao.addEventListener('click', aperte);

function corCinza(event) {
    let valor = document.querySelectorAll('.item-list')
    for (let index = 0; index < valor.length; index +=1){
        valor[index].classList.remove('cinza')
    }
    event.target.classList.add('cinza');
  }

function doubleClick (event){
  if (event.target.classList.contains('completed')){
      event.target.classList.remove('completed')
  }else {
    event.target.classList.add('completed')    
  }

}

let botaoApaga = document.getElementById('apaga-tudo');
console.log(botaoApaga)
function apagaTudo(){
let paiLista = document.getElementById('lista-tarefas');
paiLista.innerHTML = '';
  
}
botaoApaga.addEventListener('click', apagaTudo)