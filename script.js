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

// const concluirTarefa = () => {
//   const todasAsTarefas = document.querySelectorAll('.tarefa');

//   for (let index = 0; index < todasAsTarefas.length; index += 1) {
//     todasAsTarefas[index].addEventListener('dblclick', (evento) => {
//       console.log(evento.target.classList.contains('completed'));
//       if (evento.target.classList.contains('completed')) {
//         evento.target.classList.remove('completed');
//         console.log('remove');
//       } else {
//         evento.target.classList.add('completed');
//         console.log('adiciona');
//       }
//       // todasAsTarefas[index].classList.toggle('completed');
//     });
//   }
// };

const criarTarefa = () => {
  const textoTarefa = document.querySelector('#texto-tarefa');
  const listaDeTarefas = document.querySelector('#lista-tarefas');

  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa.value;
  novaTarefa.className = 'tarefa';
  listaDeTarefas.appendChild(novaTarefa);

  textoTarefa.value = '';
  selecionarTarefa();
  // concluirTarefa();
};

const apagarTodasAsTarefas = () => {
  const listaDeTarefas = document.getElementById('lista-tarefas');

  while (listaDeTarefas.firstChild) {
    listaDeTarefas.removeChild(listaDeTarefas.firstChild);
  }
};
