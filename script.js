const selecionarTarefa = () => {
  const todasAsTarefas = document.querySelectorAll('.tarefa');
  console.log(todasAsTarefas);

  for (let index = 0; index < todasAsTarefas.length; index += 1) {
    todasAsTarefas[index].addEventListener('click', () => {
      todasAsTarefas[index].style.background = 'rgb(128, 128, 128)';
    });
  }
};

const criarTarefa = () => {
  const textoTarefa = document.querySelector('#texto-tarefa');
  const listaDeTarefas = document.querySelector('#lista-tarefas');

  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa.value;
  novaTarefa.className = 'tarefa';
  listaDeTarefas.appendChild(novaTarefa);

  textoTarefa.value = '';
  selecionarTarefa();
};
