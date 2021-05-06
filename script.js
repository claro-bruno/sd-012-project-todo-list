// Adiciona Tarefas
const capturaInput = document.querySelector('#texto-tarefa');
const capturaOl = document.querySelector('#lista-tarefas');

const adicionaTarefa = () => {
  const criaLi = document.createElement('li');
  criaLi.innerText = capturaInput.value;
  criaLi.className = 'tarefa';
  capturaOl.appendChild(criaLi);
  capturaInput.value = '';
};

// Seleciona a tarefa
const selecionaTarefa = (event) => {
  const capturaLi = document.querySelectorAll('.tarefa');
  for (let index = 0; index < capturaLi.length; index += 1) {
    capturaLi[index].classList.remove('selecionada');
  }
  event.target.classList.add('selecionada');
};

// Risca tarefas completas
const completaTarefa = (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
};

// Apaga tudo
const apagaTudo = () => {
  capturaOl.innerHTML = '';
}

// Apaga tarefas completas
const apagaTarefasCompletas = () => {
  console.log('to aqui')
  const capturaTarefasCompletas = document.querySelectorAll('.completed');
  for (let index = 0; index < capturaTarefasCompletas.length; index += 1) {
    if (capturaTarefasCompletas[index].classList.contains('completed')) {
      capturaTarefasCompletas[index].remove();
    }
  }
};

// Adiciona Eventos
document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    adicionaTarefa();
  }
  if (event.target.className === ('tarefa')) {
    selecionaTarefa(event);
  }
  if (event.target.id === 'apaga-tudo') {
    apagaTudo();
  }
  if (event.target.id === 'remover-finalizados') {
    apagaTarefasCompletas();
  }
});

document.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('tarefa')) {
    completaTarefa(event);
  }
});

capturaInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    adicionaTarefa();
  }
});
