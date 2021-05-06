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
  return newInput;
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

//Função que cria um botão de id como parametro dentro da section de id botaoAddTarefa
function createButton(buttonId) {
  const getBotaoAddTarefa = document.getElementById('botaoAddTarefa');

  const newButton = document.createElement('button');
  newButton.id = buttonId;
  newButton.innerHTML = 'Adicionar tarefa';
  getBotaoAddTarefa.appendChild(newButton);
}
createButton('criar-tarefa');

//Função que captura o que ta escrito no input e adiciona na lista ordenada;
function addNewTask() {
  let getInputField = document.getElementById('texto-tarefa');
  let getButton = document.getElementById('criar-tarefa');
  let getTaskList = document.getElementById('lista-tarefas');

  getButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerHTML = getInputField.value;
      newLi.classList.add('task');
      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Adicionar tarefa');
    }
    addClickListener();
    addDoubleClickListener();
  })
}
addNewTask();

//Função que corre por todos os lis da ol e seleciona a li clicada já chamando a funcao setSelectedClass
function addClickListener() {
  let getTasks = document.getElementsByClassName('task');
  for (let index = 0; index < getTasks.length; index += 1) {
    getTasks[index].addEventListener('click', setSelectedClass);
  }
}
//Função que corre corre por todas as lis da ol removendo as que possuem a classe selected e adicionando a classe selected na li clicada
function setSelectedClass(event) {
  let getTasks = document.getElementsByClassName('task');
  for (let index = 0; index < getTasks.length; index += 1) {
    getTasks[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }

function addDoubleClickListener() {
  let getTasks = document.getElementsByClassName('task');
  for (let index = 0; index < getTasks.length; index += 1) {
    getTasks[index].addEventListener('dblclick', completeTask);
  }
}
function completeTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
};


//Função que corre corre por todas as lis da ol removendo as que possuem a classe selected e adicionando a classe selected na li clicada
// function setCompletedClass(event) {
//   let getTasks = document.getElementsByTagName('li');
//   for (let index = 0; index < getTasks.length; index += 1) {
//     if (getTasks[index].classList = 'completed') {
//       getTasks[index].classList.remove('completed');
//     }
//     event.target.classList.add(completed);
//   }
// }








