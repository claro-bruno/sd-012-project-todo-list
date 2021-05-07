const bodyPagina = document.body;

const pIdFuncionamentoCria = document.createElement('p');
pIdFuncionamentoCria.id = 'funcionamento';
pIdFuncionamentoCria.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
bodyPagina.appendChild(pIdFuncionamentoCria);

const inputIdTextoTarefaCria = document.createElement('input');
inputIdTextoTarefaCria.id = 'texto-tarefa';
bodyPagina.appendChild(inputIdTextoTarefaCria);

const botaoIdCriarTarefaCria = document.createElement('button');
botaoIdCriarTarefaCria.id = 'criar-tarefa';
botaoIdCriarTarefaCria.innerText = 'Criar Tarefa';
bodyPagina.appendChild(botaoIdCriarTarefaCria);

const olIdListaTarefaCria = document.createElement('ol');
olIdListaTarefaCria.id = 'lista-tarefas';
bodyPagina.appendChild(olIdListaTarefaCria);

function colocaFundo(event) {
  const liCorCinza = 'rgb(128, 128, 128)';
  event.target.style.backgroundColor = liCorCinza;
}

function removeFundo() {
  const LiLista = document.querySelectorAll('li');
  for (let index = 0; index < LiLista.length; index += 1) {
    LiLista[index].style.backgroundColor = null;
  }
}

function riscaLi(event) {
  const classCompleted = document.querySelectorAll('.completed');
  if (classCompleted.length === 0) {
    event.target.className = 'completed';
  } else if (classCompleted.length > 0) {
    event.target.classList.remove('completed');
  }
}

function adicionaTarefas() {
  const inputIdTextoTarefa = document.querySelector('#texto-tarefa');
  const botaoIdCriarTarefa = document.querySelector('#criar-tarefa');
  const olIdListaTarefa = document.querySelector('#lista-tarefas');

  botaoIdCriarTarefa.addEventListener('click', () => {
    const novaLi = document.createElement('li');
    novaLi.innerHTML = inputIdTextoTarefa.value;
    novaLi.addEventListener('dblclick', riscaLi);
    novaLi.addEventListener('click', removeFundo);
    novaLi.addEventListener('click', colocaFundo);
    olIdListaTarefa.appendChild(novaLi);
    inputIdTextoTarefa.value = '';
  });

  inputIdTextoTarefa.addEventListener('keyup', () => {
    const novaLi = document.createElement('li');
    novaLi.innerHTML = inputIdTextoTarefa.value;
  });
}
adicionaTarefas();
