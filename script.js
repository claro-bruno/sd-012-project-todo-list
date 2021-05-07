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

function alteraCor(event) {
  const liAlteraCorCinza = document.querySelector('li');
  const liCorCinza = 'rgb(128, 128, 128)';
  if (liAlteraCorCinza.style.backgroundColor !== liCorCinza) {
    event.target.style.backgroundColor = liCorCinza;
  } else if (liAlteraCorCinza.style.backgroundColor === liCorCinza) {
    event.target.style.backgroundColor = null;
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
    novaLi.className = 'alteraCorCinza';
    novaLi.addEventListener('dblclick', riscaLi);
    novaLi.addEventListener('click', alteraCor);
    olIdListaTarefa.appendChild(novaLi);
    inputIdTextoTarefa.value = '';
  });

  inputIdTextoTarefa.addEventListener('keyup', () => {
    const novaLi = document.createElement('li');
    novaLi.innerHTML = inputIdTextoTarefa.value;
  });
}
adicionaTarefas();
