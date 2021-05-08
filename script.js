const botaoCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const inputTxtTarefa = document.getElementById('texto-tarefa');
const botaoLimparLista = document.getElementById('apaga-tudo');
const botaoRemFin = document.getElementById('remover-finalizados');
const botaoRemSelec = document.getElementById('remover-selecionado');
const botaoSalvTaref = document.getElementById('salvar-tarefas');
const botaoMovCima = document.getElementById('mover-cima');
const botaoMovBaixo = document.getElementById('mover-baixo');
const tarefas = document.getElementsByClassName('tarefa');
// Função que seleciona tarefa ao clicar
function tarefaSelecionada(_e) {
  for (let index = 0; index < _e.length; index += 1) {
    _e[index].addEventListener('click', (event) => {
      const marcador = document.querySelector('.marcador');
      if (marcador) {
        marcador.classList.remove('marcador');
      }
      event.target.classList.add('marcador');
    });
  }
}
// Função que marca tarefa como completa
function tarefaCompleta(_e) {
  for (let index = 0; index < _e.length; index += 1) {
    _e[index].addEventListener('dblclick', (event) => {
      event.target.classList.toggle('completed');
    });
  }
}
// Adiciona tarefas a lista e aplica sistemas de marcação
function sistemaDeTarefas() {
  botaoCriarTarefa.addEventListener('click', () => {
    const criarTarefa = document.createElement('li');
    criarTarefa.addEventListener('click', (event) => {
      const marcador = document.querySelector('.marcador');
      if (marcador) {
        marcador.classList.toggle('marcador');
      }
      event.target.classList.toggle('marcador');
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
// Configura botão Salvar Tarefas para salvar no localStorage
botaoSalvTaref.addEventListener('click', () => {
  localStorage.setItem('tarefas', listaTarefas.innerHTML);
});
// Carrega tarefas salvas no localStorage se houver
window.onload = () => {
  const tarefasSalvas = localStorage.getItem('tarefas');
  if (tarefasSalvas !== null) {
    listaTarefas.innerHTML = tarefasSalvas;
    tarefaSelecionada(tarefas);
    tarefaCompleta(tarefas);
  }
};
// Configura botão Mover para Cima
botaoMovCima.addEventListener('click', () => {
  const tarefaMarcada = document.querySelector('.marcador');
  if (tarefaMarcada !== null && tarefaMarcada.previousElementSibling !== null) {
    listaTarefas.insertBefore(tarefaMarcada, tarefaMarcada.previousElementSibling);
  }
});
// Configura botão Mover para Baixo
botaoMovBaixo.addEventListener('click', () => {
  const tarefaMarcada = document.querySelector('.marcador');
  if (tarefaMarcada !== null && tarefaMarcada.nextElementSibling !== null) {
    listaTarefas.insertBefore(tarefaMarcada, tarefaMarcada.nextElementSibling.nextElementSibling);
  }
});
// Configura botão Remover Selecionados
botaoRemSelec.addEventListener('click', () => {
  const tarefaMarcada = document.querySelector('.marcador');
  listaTarefas.removeChild(tarefaMarcada);
});
