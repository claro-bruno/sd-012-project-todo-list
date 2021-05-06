//Função que cria um parágrado de id funcionamento dentro da section de id instrucao
function createInstruction() {
const getInstrucao = document.getElementById('instrucao');

const newInstruction = document.createElement('p');
newInstruction.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
newInstruction.id = 'funcionamento'
getInstrucao.appendChild(newInstruction);
}
createInstruction();

//Função que cria um input de id como parametro a ser passado pelo usuário dentro da section de id caixaInput
function createInput(inputId) {
  const getCaixaInput = document.getElementById('caixaInput');

  const newInput = document.createElement('input');
  newInput.id = inputId;
  getCaixaInput.appendChild(newInput);
}
createInput('texto-tarefa');

//Função que cria uma ol de id como parametro a ser passado pelo usuário dentro da section de id ListaOrdenada
function createOl(olId) {
  const getListaOrdenada = document.getElementById('listaOrdenada');

  const newOl = document.createElement('ol');
  newOl.id = olId;
  getListaOrdenada.appendChild(newOl);
}
createOl('lista-tarefas');

