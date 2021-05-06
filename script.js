const selecionarTarefa = () => {
  const todasAsTarefas = document.querySelectorAll('.tarefa');

  for (let index = 0; index < todasAsTarefas.length; index += 1) {
    todasAsTarefas[index].addEventListener('click', () => {
      const tarefaSelecionada = document.querySelector('#selecionado');
      if (tarefaSelecionada != null) {
        tarefaSelecionada.removeAttribute('id');
      }
      todasAsTarefas[index].id = 'selecionado';
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

  // marcar elemento como concluido
  novaTarefa.addEventListener('dblclick', (evento) => {
    evento.target.classList.toggle('completed');
  });
  textoTarefa.value = '';
  selecionarTarefa();
};

const apagarTodasAsTarefas = () => {
  const listaDeTarefas = document.getElementById('lista-tarefas');

  while (listaDeTarefas.firstChild) {
    listaDeTarefas.removeChild(listaDeTarefas.firstChild);
  }
};
