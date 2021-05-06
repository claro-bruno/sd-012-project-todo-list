const botaoCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const inputTxtTarefa = document.getElementById('texto-tarefa');
// Remove Seleção de item anterior
function removeSelecao() {
  const tarefas = document.getElementsByClassName('tarefa');
  for (let index = 0; index < tarefas.length; index += 1) {
    const tarefa = tarefas[index];
    tarefa.classList.remove('marcado');
  }
}
// Adiciona tarefas a lista e aplica cor a tarefa selecionada
function adicionaTarefa() {
  botaoCriarTarefa.addEventListener('click', () => {
    const criarTarefa = document.createElement('li');
    criarTarefa.className = 'tarefa';
    criarTarefa.innerHTML = inputTxtTarefa.value;
    listaTarefas.appendChild(criarTarefa);
    inputTxtTarefa.value = '';
    criarTarefa.addEventListener('click', () => {
      removeSelecao();
      criarTarefa.classList.add('marcado');
    });
  });
}
adicionaTarefa();
