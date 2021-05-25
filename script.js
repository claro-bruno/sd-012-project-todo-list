const elementoLista = document.querySelector('#lista-tarefas');
const elementoInput = document.querySelector('#texto-tarefa');
const elementoBotao = document.querySelector('#criar-tarefa');
const botaoRemoveFinalizados = document.querySelector('#remover-finalizados');
const botaoRemoverSelecionados = document.querySelector('#remover-selecionado');
const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');


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


    criaLi.addEventListener('dblclick', function(event) {
        if (event.target.className === 'completed') {
        event.target.className = '';
        } else {
            event.target.className = 'completed';
        };
    });
});

const button = document.getElementById('apaga-tudo');
button.addEventListener('click', function () {
  const lista = document.querySelectorAll('li');
    for (let index = 0; index < lista.length; index += 1) {
    lista[index].remove();
  console.log(lista[index])
  };
});

botaoRemoveFinalizados.addEventListener('click', function (event) {
    const listaItensCompleted = document.querySelectorAll('.completed');
    for (let index = 0; index < listaItensCompleted.length; index +=1) {
        listaItensCompleted[index].remove();
    }    
});

botaoSalvarTarefas.addEventListener('click', function () { 
    const salvaLista = document.querySelector('ol');
    localStorage.setItem('listaSalva', salvaLista.innerHTML);
});
elementoLista.innerHTML = localStorage.getItem('listaSalva');


botaoRemoverSelecionados.addEventListener ('click', function (event) {
    const listaItensSelected = document.querySelectorAll('li') 
    for (let index = 0; index < listaItensSelected.length; index += 1) {
        if (listaItensSelected[index].style.backgroundColor === 'rgb(128, 128, 128)') {
            listaItensSelected[index].remove()
            console.log('oi')
        }
    }
});
