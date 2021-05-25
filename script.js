const elementoLista = document.querySelector('#lista-tarefas');
const elementoInput = document.querySelector('#texto-tarefa');
const elementoBotao = document.querySelector('#criar-tarefa');

elementoBotao.addEventListener('click', function() {
    const criaLi = document.createElement('li');
    criaLi.innerText = elementoInput.value;
    elementoLista.appendChild(criaLi);
    elementoInput.value = '';
  
    criaLi.addEventListener('click', function(event){
      const lista = document.querySelectorAll('li');
      for (let index = 0; index < lista.length; index +=1) {
        if (lista[index].style.backgroundColor === 'rgb(128, 128, 128)') {
          lista[index].style.backgroundColor = '';
        };
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      };
    });
  });

criaLi.addEventListener('dblclick', function(event) {
    const listaItens = document.querySelectorAll('li');
    for (let index = 0; index < listaItens.length; index +=1) {
      if (listaItens[index].className === 'completed') {
      listaItens[index].className = '';
    };
    }
    event.target.className = 'completed';
});

const button = document.getElementById('apaga-tudo');
button.addEventListener('click', function () {
  const lista = document.querySelectorAll('li');
    for (let index = 0; index < lista.length; index += 1) {
    lista[index].remove();
  console.log(lista[index])
  };
});