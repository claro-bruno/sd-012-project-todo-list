const elementoLista = document.querySelector('#lista-tarefas');
const elementoInput = document.querySelector('#texto-tarefa');
const elementoBotao = document.querySelector('#criar-tarefa');
const botaoApagaTudo = document.querySelector('#apaga-tudo');

elementoBotao.addEventListener('click', function () {
  const criaLi = document.createElement('li');
  criaLi.innerText = elementoInput.value;
  elementoLista.appendChild(criaLi);
  elementoInput.value = '';

  criaLi.addEventListener('click', function (event) {
    const listaItens = document.querySelectorAll('li');
    for (let index = 0; index < listaItens.length; index += 1) {
      if (listaItens[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        listaItens[index].style.backgroundColor = '';

      }
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';

  })

  criaLi.addEventListener('dblclick', function (event) {
    if (event.target.className === 'completed') {
      event.target.className = '';
    } else {
      event.target.className = 'completed';
    }
  })
});

botaoApagaTudo.addEventListener('click', function(event){
  const listaItens = document.querySelectorAll('li')
 for(let index = 0; index <listaItens.length; index += 1 ){
  listaItens[index].remove()
 }
})