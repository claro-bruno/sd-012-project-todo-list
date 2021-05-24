const elementoLista = document.querySelector('#lista-tarefas');
const elementoInput = document.querySelector('#texto-tarefa');
const elementoBotao = document.querySelector('#criar-tarefa');

elementoBotao.addEventListener('click', function () {
  const criaLi = document.createElement('li');
  criaLi.innerText = elementoInput.value;
  elementoLista.appendChild(criaLi);
  elementoInput.value = '';

  criaLi.addEventListener('click', function (event) {
    
    const listaItens = document.querySelectorAll('li');
    for(let index = 0; index < listaItens.length; index += 1){
      if(listaItens[index].style.backgroundColor === 'rgb(128, 128, 128)'){
        listaItens[index].style.backgroundColor = '';
        console.log('oi');
      }
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    console.log('ooooii');
  })
});
