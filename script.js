function createInstruction () {
const getInstrucao = document.getElementById('instrucao');

const newInstruction = document.createElement('p');
newInstruction.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
newInstruction.id = 'funcionamento'
getInstrucao.appendChild(newInstruction);
}
createInstruction();
