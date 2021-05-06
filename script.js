// Adiciona Tarefas
const capturaInput = document.querySelector('#texto-tarefa');

const adicionaTarefa = () => {
  const capturaOl = document.querySelector('#lista-tarefas');
  const criaLi = document.createElement('li');
  criaLi.innerText = capturaInput.value;
  capturaOl.appendChild(criaLi);
  capturaInput.value = '';
};

// Adiciona Eventos
document.addEventListener('click', (event) => {
  if(event.target.id === 'criar-tarefa') {
    adicionaTarefa();
  }
})