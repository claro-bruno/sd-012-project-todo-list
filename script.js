// https://www.codegrepper.com/code-examples/javascript/how+to+append+li+to+ul+in+javascript
function tarefas() {
  const getTarefas = document.getElementById('lista-tarefas');
  const getTarefaElement = document.getElementById('texto-tarefa');
  const getNovoValor = getTarefaElement.value;
  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = getNovoValor;
  getTarefas.appendChild(novaTarefa);
  const limparInput = '';
  getTarefaElement.value = limparInput;
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    tarefas();
  }
});
