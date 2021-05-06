// Adiciona Tarefas
const capturaInput = document.querySelector('#texto-tarefa');

const adicionaTarefa = () => {
  const capturaOl = document.querySelector('#lista-tarefas');
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

// Adiciona Eventos
document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    adicionaTarefa();
  }
  if (event.target.className === ('tarefa')) {
    selecionaTarefa(event);
  }
});

capturaInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    adicionaTarefa();
  }
});