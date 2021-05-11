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

const marcarConcluida = (li) => {
  li.addEventListener('dblclick', (evento) => {
    evento.target.classList.toggle('completed');
  });
};

const criarTarefa = () => {
  const textoTarefa = document.querySelector('#texto-tarefa');
  const listaDeTarefas = document.querySelector('#lista-tarefas');

  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa.value;
  novaTarefa.className = 'tarefa';
  listaDeTarefas.appendChild(novaTarefa);

  textoTarefa.value = '';
  marcarConcluida(novaTarefa);
  selecionarTarefa();
};

const apagarTodasAsTarefas = () => {
  const listaDeTarefas = document.getElementById('lista-tarefas');

  while (listaDeTarefas.firstChild) {
    listaDeTarefas.removeChild(listaDeTarefas.firstChild);
  }
};

const removerConcluidos = () => {
  const tarefasConcluidas = document.querySelectorAll('.completed');

  for (let index = 0; index < tarefasConcluidas.length; index += 1) {
    tarefasConcluidas[index].remove();
  }
};

const salvarTarefas = () => {
  const todasAsTarefas = document.querySelectorAll('.tarefa');
  const tarefasSalvas = [];
  const tarefasSalvasClass = [];

  if (todasAsTarefas != null) {
    for (let index = 0; index < todasAsTarefas.length; index += 1) {
      tarefasSalvas.push(todasAsTarefas[index].innerHTML);
      tarefasSalvasClass.push(todasAsTarefas[index].classList);
    }
  }

  localStorage.setItem('tarefasSalvas', tarefasSalvas);
  localStorage.setItem('classes', tarefasSalvasClass);
};

const carregarTarefasSalvas = () => {
  const tarefasSalvas = localStorage.getItem('tarefasSalvas');
  const classesSalvas = localStorage.getItem('classes');
  if (tarefasSalvas !== null && tarefasSalvas !== '') {
    const arrayDeClasses = classesSalvas.split(',');
    const arrayDeTarefas = tarefasSalvas.split(',');
    const listaDeTarefas = document.querySelector('#lista-tarefas');

    for (let index = 0; index < arrayDeTarefas.length; index += 1) {
      const criarTarefaSalva = document.createElement('li');
      criarTarefaSalva.innerText = arrayDeTarefas[index];
      criarTarefaSalva.className = arrayDeClasses[index];
      listaDeTarefas.appendChild(criarTarefaSalva);
      marcarConcluida(criarTarefaSalva);
    }

    selecionarTarefa();
  }
};

const removerFinalizados = () => {
  const listaDeTarefas = document.querySelector('#lista-tarefas')
  const selecionado = document.querySelector('#selecionado')
  listaDeTarefas.removeChild(selecionado)
}