const botaoCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const inputTxtTarefa = document.getElementById('texto-tarefa');
const botaoLimparLista = document.getElementById('apaga-tudo');
// Adiciona tarefas a lista e aplica sistemas de marcação
function sistemaDeTarefas() {
  botaoCriarTarefa.addEventListener('click', () => {
    const criarTarefa = document.createElement('li');
    criarTarefa.addEventListener('click', (event) => {
      const marcado = document.querySelector('.marcado');
      if (marcado) {
        marcado.classList.toggle('marcado');
      }
      event.target.classList.toggle('marcado');
    });
    criarTarefa.addEventListener('dblclick', (event) => {
      event.target.classList.toggle('completed');
    });
    criarTarefa.innerHTML = inputTxtTarefa.value;
    listaTarefas.appendChild(criarTarefa);
    inputTxtTarefa.value = '';
  });
}
sistemaDeTarefas();
// Configura botão Limpar Lista
botaoLimparLista.addEventListener('click', () => {
  listaTarefas.innerText = '';
});
