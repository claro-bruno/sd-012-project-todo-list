/* let botaoClicado = document.getElementById('criar-tarefa');
botaoClicado.addEventListener('click', acrescentaLista);

function acrescentaLista(event) {
    let novaTarefa = document.createElement('li');
    event.preventDefault();
    novaTarefa.className='lista';
    document.querySelector('#lista-tarefas').appendChild(novaTarefa);
    let retornoLista = document.getElementById('texto-tarefa');
    novaTarefa.innerHTML = retornoLista.value;
    retornoLista.value = '';

    }
 */
/* window.onload = function () { */
    const botaoClicado = document.getElementById('criar-tarefa');
    botaoClicado.addEventListener('click', function () {
      let novaTarefa = document.createElement('li');
      /* event.preventDefault(); */
      novaTarefa.className='lista';
      document.querySelector('#lista-tarefas').appendChild(novaTarefa);
      let retornoLista = document.getElementById('texto-tarefa');
      novaTarefa.innerHTML = retornoLista.value;
      retornoLista.value = '';
    })
