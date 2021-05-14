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
  if (valorInput.value !== '') {
    olist.appendChild(novoItem);
    valorInput.value = '';
  
  }
}

/*   }
    let listaDoida = document.getElementsByClassName('item-list')
      listaDoida.sort(a - b);
      for (let index = 0; index < ListaDoida.length; index += 1) {
        listaDoida[index]
      }

} */

botao.addEventListener('click', aperte);

/* function corcinza() {
let itemDaLista = document.querySelectorAll('#lista-tarefa');
for (let index = 0; index < itemDaLista.length; index += 1) {
itemDaLista[index].addEventListener('click', function (event) {
event.target.style.backgroundColor = 'rgb(128,128,128)';

})
}
}
itemDaLista.addEventListener('click', corcinza); */