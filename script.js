
const olList = document.querySelector('#lista-tarefas');
const btnTask = document.getElementById('criar-tarefa');
const input = document.querySelector('#texto-tarefa');
btnTask.addEventListener('click', (event) => {
  const newItem = document.createElement('li');
  newItem.classList.add('task');
  olList.appendChild(newItem);
  // Captura o texto que foi armazenado nela e coloca na lista. 
  newItem.innerHTML = input.value;
  //limpa o texto no value. 
  input.value = '';
});


console.log();


// 1 - Adicionar o Botão com id="criar-tarefa" OK  
// 2 - Adicionar um escutador de eventos no botão.
// 3 - Criar um novo item ao final da lista.
// 4 - Limpar o texto.
// 5 - 
 
/* 
1 - Capturar o elemento input.
2 - Capturar o value.
3 - Adicionar o texto no elemento newItem. 
4 - limpar o texto do value.

*/

// crl + k crl + c = para comentar.
 // crl + k ctrl + u = para descomentar.
