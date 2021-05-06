const botaoCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const inputTxtTarefa = document.getElementById('texto-tarefa');
// Adiciona tarefas a lista
function adicionaTarefa() {
  botaoCriarTarefa.addEventListener('click', () => {
    const criarTarefa = document.createElement('li');
    criarTarefa.className = 'tarefa';
    criarTarefa.innerHTML = inputTxtTarefa.value;
    listaTarefas.appendChild(criarTarefa);
    inputTxtTarefa.value = '';
    criarTarefa.addEventListener('click', () => {
      criarTarefa.classList.add('marcado');
    });
  });
}
adicionaTarefa();
// Altera cor de item da lista de tarefas
const tarefas = document.getElementsByClassName('tarefa');
