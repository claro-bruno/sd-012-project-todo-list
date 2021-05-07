const botaoCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const inputTxtTarefa = document.getElementById('texto-tarefa');
const botaoLimparLista = document.getElementById('apaga-tudo');
const botaoRemFin = document.getElementById('remover-finalizados');
const botaoSalvTaref = document.getElementById('salvar-tarefas');
// Adiciona tarefas a lista e aplica sistemas de marcação
function sistemaDeTarefas() {
  botaoCriarTarefa.addEventListener('click', () => {
    const criarTarefa = document.createElement('li');
    criarTarefa.addEventListener('click', (event) => {
      const marcador = document.querySelector('.marcado');
      if (marcador) {
        marcador.classList.toggle('marcado');
      }
      event.target.classList.toggle('marcado');
    });
    criarTarefa.addEventListener('dblclick', (event) => {
      event.target.classList.toggle('completed');
    });
    criarTarefa.classList.add('tarefa');
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
// Configura Botão Remover Finalizados
botaoRemFin.addEventListener('click', () => {
  const completos = document.querySelectorAll('.completed');
  for (let index = 0; index < completos.length; index += 1) {
    listaTarefas.removeChild(completos[index]);
  }
});
// Configura botão Salvar Tarefas
botaoSalvTaref.addEventListener('click', () => {
  localStorage.setItem('tarefas', listaTarefas.innerHTML);
});
// Carrega tarefas salvas
window.onload = () => {
  const tarefasSalvas = localStorage.getItem('tarefas');
  if (tarefasSalvas !== null) {
    listaTarefas.innerHTML = tarefasSalvas;
  }
};
