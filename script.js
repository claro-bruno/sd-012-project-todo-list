//
//button id = criar-tarefa
//input id = texto-tarefa
//ol id = lista-tarefas

const botao = document.getElementById('criar-tarefa');

function aperte(){
    const olist = document.getElementById('lista-tarefas');
    let valorInput = document.getElementById('texto-tarefa');
    let novoItem = document.createElement('li')
    novoItem.className = 'item-list';
    novoItem.innerText = valorInput.value
    if(valorInput.value !== ''){
    olist.appendChild(novoItem);
    }
}

 botao.addEventListener('click',aperte)