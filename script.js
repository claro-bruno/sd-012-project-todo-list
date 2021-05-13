// https://www.codegrepper.com/code-examples/javascript/how+to+append+li+to+ul+in+javascript
function tarefas() {
  const getTarefas = document.getElementById('lista-tarefas');
  const getTarefaElement = document.getElementById('texto-tarefa');
  const getNovoValor = getTarefaElement.value;
  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = getNovoValor;
  novaTarefa.classList.add('tarefa');
  getTarefas.appendChild(novaTarefa);
  const limparInput = '';
  getTarefaElement.value = limparInput;
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    tarefas();
  }
});

const list = document.querySelector('#lista-tarefas');

function grayColor() {
  const tarefaSelected = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tarefaSelected.length; index += 1) {
    if (tarefaSelected[index].classList.contains('selected')) {
      tarefaSelected[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      tarefaSelected[index].style.backgroundColor = 'white';
    }
  }
}

function selectTarefa() {
  list.addEventListener('click', (event) => {
    const tarefaSelected = document.querySelector('.selected');
    if (tarefaSelected !== null) {
      tarefaSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
    grayColor();
  });
}

selectTarefa();
