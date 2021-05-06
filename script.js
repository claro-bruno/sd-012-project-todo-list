//Função que cria um parágrado de id funcionamento dentro da section de id instrucao
function createInstruction() {
const getInstrucao = document.getElementById('instrucao');

const newInstruction = document.createElement('p');
newInstruction.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
newInstruction.id = 'funcionamento'
getInstrucao.appendChild(newInstruction);
}
createInstruction();

function createInput(inputId) {
  const getCaixaInput = document.getElementById('caixaInput');

  const newInput = document.createElement('input');
  newInput.id = inputId;
  getCaixaInput.appendChild(newInput);
}
createInput('texto-tarefa');
