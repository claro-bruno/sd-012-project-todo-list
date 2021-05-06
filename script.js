const bodyPagina = document.body;

const pIdFuncionamento = document.createElement('p');
pIdFuncionamento.id = 'funcionamento';
pIdFuncionamento.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
bodyPagina.appendChild(pIdFuncionamento);

const inputIdTextoTarefa = document.createElement('input');
inputIdTextoTarefa.id = 'texto-tarefa';
bodyPagina.appendChild(inputIdTextoTarefa);

const olIdListaTarefa = document.createElement('ol');
olIdListaTarefa.id = 'lista-tarefas';
bodyPagina.appendChild(olIdListaTarefa);

const botaoIdCriarTarefa = document.createElement('button');
botaoIdCriarTarefa.id = 'criar-tarefa';
botaoIdCriarTarefa.innerText = 'Criar Tarefa';
bodyPagina.appendChild(botaoIdCriarTarefa);
