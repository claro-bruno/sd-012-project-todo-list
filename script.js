const button = document.querySelector('#criar-tarefa');

function criarTarefa() {
  const textoTarefa = document.querySelector('#texto-tarefa').value;
  const listaTarefas = document.querySelector('#lista-tarefas');
  const adicionaTarefa = document.createElement('li');
  adicionaTarefa.innerHTML = textoTarefa;
  listaTarefas.appendChild(adicionaTarefa);
  document.querySelector('#texto-tarefa').value = '';
}
button.addEventListener('click', criarTarefa);

const pintarTarefa = document.querySelector('#lista-tarefas');

function pintar(evento) {
  const tarefaSelecionada = document.querySelectorAll('li');
  for (let index = 0; index < tarefaSelecionada.length; index += 1) {
    tarefaSelecionada[index].style.backgroundColor = '';
  }
  evento.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
pintarTarefa.addEventListener('click', pintar);

function taxar(event) {
  if (event.target.className === 'completed') {
    event.target.className = '';
  } else {
    event.target.className = 'completed';
  }
}
pintarTarefa.addEventListener('dblclick', taxar);

function apagarTudo() {
  const deletar = document.querySelectorAll('li');
  if (deletar.length > 0) {
    for (let index = 0; index < deletar.length; index += 1) {
      deletar[index].remove();
    }
  }
}
const botaoApagar = document.querySelector('#apaga-tudo');
botaoApagar.addEventListener('click', apagarTudo);

function finalizados() {
  const selecionaCompletas = document.querySelectorAll('.completed');
  for (let index = 0; index < selecionaCompletas.length; index += 1) {
    selecionaCompletas[index].remove();
  }
}

const botaoRemoveFinalizado = document.querySelector('#remover-finalizados');
botaoRemoveFinalizado.addEventListener('click', finalizados);

function salvaItens() {
  const tarefas = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('tarefasSalvar', tarefas);
}

const botaoSalvar = document.querySelector('#salvar-tarefas');
botaoSalvar.addEventListener('click', salvaItens);

const resgatar = localStorage.getItem('tarefasSalvar');
document.getElementById('lista-tarefas').innerHTML = resgatar;
