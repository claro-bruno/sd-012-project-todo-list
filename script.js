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
  const listaDeTarefas = document.querySelector('#lista-tarefas');
  const selecionado = document.querySelector('#selecionado');
  listaDeTarefas.removeChild(selecionado);
};

const moverAcima = () => {
  const todasAsTarefas = document.querySelectorAll('.tarefa');
  const tarefaSelecionada = document.querySelector('#selecionado');
  
  if (tarefaSelecionada !== null) {
    let indiceDaTarefaSelecionada = '';

    // pegar posição atual da tarefa selecionada
    for (let index = 0; index < todasAsTarefas.length; index += 1) {
      if (tarefaSelecionada === todasAsTarefas[index]) {
        indiceDaTarefaSelecionada = index;
      }
    }

    // recriar a lista com todas as tarefas
    if (indiceDaTarefaSelecionada !== 0) {
      let novaListaDeTarefas = [...todasAsTarefas];
      const tarefaAnterior = novaListaDeTarefas[indiceDaTarefaSelecionada - 1];
      novaListaDeTarefas[indiceDaTarefaSelecionada] = tarefaAnterior;
      novaListaDeTarefas[indiceDaTarefaSelecionada - 1] = tarefaSelecionada;

      // renderizar nova lista
      apagarTodasAsTarefas()
      for (let index = 0; index < novaListaDeTarefas.length; index += 1) {
        const listaDeTarefas = document.querySelector('#lista-tarefas');

        const novaTarefa = document.createElement('li');
        novaTarefa.innerText = novaListaDeTarefas[index].innerText;
        novaTarefa.classList = novaListaDeTarefas[index].classList;
        if (novaListaDeTarefas[index].id !== '') {
          novaTarefa.id = novaListaDeTarefas[index].id
        }
        listaDeTarefas.appendChild(novaTarefa);

        selecionarTarefa();
        marcarConcluida(novaTarefa);
      }
    }
  }
};

const moverAbaixo = () => {
  const todasAsTarefas = document.querySelectorAll('.tarefa');
  const tarefaSelecionada = document.querySelector('#selecionado');
  
  if (tarefaSelecionada !== null) {
    let indiceDaTarefaSelecionada = '';

    // pegar posição atual da tarefa selecionada
    for (let index = 0; index < todasAsTarefas.length; index += 1) {
      if (tarefaSelecionada === todasAsTarefas[index]) {
        indiceDaTarefaSelecionada = index;
      }
    }

    // recriar a lista com todas as tarefas
    if (indiceDaTarefaSelecionada < todasAsTarefas.length - 1) {
      let novaListaDeTarefas = [...todasAsTarefas];
      const proximaTarefa = novaListaDeTarefas[indiceDaTarefaSelecionada + 1];
      novaListaDeTarefas[indiceDaTarefaSelecionada] = proximaTarefa;
      novaListaDeTarefas[indiceDaTarefaSelecionada + 1] = tarefaSelecionada;

      // renderizar nova lista
      apagarTodasAsTarefas()
      for (let index = 0; index < novaListaDeTarefas.length; index += 1) {
        const listaDeTarefas = document.querySelector('#lista-tarefas');

        const novaTarefa = document.createElement('li');
        novaTarefa.innerText = novaListaDeTarefas[index].innerText;
        novaTarefa.classList = novaListaDeTarefas[index].classList;
        if (novaListaDeTarefas[index].id !== '') {
          novaTarefa.id = novaListaDeTarefas[index].id
        }
        listaDeTarefas.appendChild(novaTarefa);

        selecionarTarefa();
        marcarConcluida(novaTarefa);
      }
    }
  }
};
