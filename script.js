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
  botao.addEventListener('click', aperte);
/*
        let itemDaLista = document.querySelectorAll('#lista-tarefa');
            itemDaLista[index].addEventListener('click', function (event) {
                for (let index = 0; index < itemDaLista.length; index += 1) {
                    if (event.target.ClassName !== 'cinza'){
                    event.target.classList.add('cinza')
                    }
                }
            }) */