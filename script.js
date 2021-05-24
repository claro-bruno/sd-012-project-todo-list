const elementoLista = document.querySelector('#lista-tarefas');
const elementoInput = document.querySelector('#texto-tarefa');
const elementoBotao = document.querySelector('#criar-tarefa');

elementoBotao.addEventListener('click', function(){
  const criaLi = document.createElement('li');
  criaLi.innerText = elementoInput.value;
  elementoLista.appendChild(criaLi);
  elementoInput.value = '';

criaLi.addEventListener('click', function(event){
  const lista = document.querySelectorAll('li');
  for (let index = 0; index < lista.length; index +=1) {
    if (lista[index].style.backgroundColor === 'rgb(128, 128, 128)');
    lista[index].style.backgroundColor = '';
  };
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
});



// // requisito 10
// let todosItens = document.getElementsByClassName('tarefas');

// function apagarTodoItem() {
//     let apagarTarefas = document.getElementById('apagar-tudo');
//     apagarTarefas.addEventListener('click', function (event) {
//       let listaTarefas = document.getElementById('lista-tarefas');
//       let todosItens = document.getElementsByClassName('tarefas');
//         for (let indice = 0; indice < todosItens.length; indice += 1) {
//         tarefas.removeChild(todosItens[indice]);
//       }
//     });
// }