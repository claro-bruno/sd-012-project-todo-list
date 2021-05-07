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

function adicionaTarefas() {
  const inputIdTextoTarefa = document.querySelector('#texto-tarefa');
  const botaoIdCriarTarefa = document.querySelector('#criar-tarefa');
  const olIdListaTarefa = document.querySelector('#lista-tarefas');

  botaoIdCriarTarefa.addEventListener('click', () => {
    const novaLi = document.createElement('li');
    novaLi.innerHTML = inputIdTextoTarefa.value;
    novaLi.className = 'alteraCorCinza';
    olIdListaTarefa.appendChild(novaLi);
    inputIdTextoTarefa.value = '';
  });

  inputIdTextoTarefa.addEventListener('keyup', () => {
    const novaLi = document.createElement('li');
    novaLi.innerHTML = inputIdTextoTarefa.value;
  });
}
adicionaTarefas();

function alteraCor() {
  const liAlteraCorCinza = document.querySelectorAll('p');
  const liCorCinza = 'rgb(128, 128, 128)';
  for (let index = 0; index < liAlteraCorCinza.length; index += 1) {
    liAlteraCorCinza[index].addEventListener('click', () => {
      if (liAlteraCorCinza[index].style.backgroundColor !== liCorCinza) {
        liAlteraCorCinza[index].style.backgroundColor = liCorCinza;
      } else if (liAlteraCorCinza[index].style.backgroundColor === liCorCinza) {
        liAlteraCorCinza[index].style.backgroundColor = null;
      }
    });
  }
}
alteraCor();
