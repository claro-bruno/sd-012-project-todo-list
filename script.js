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
  let getTaskList = document.getElementById('lista-tarefas')
  console.log(getTaskList);
  ;

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

function addClickListener() {
  let getTasks = document.getElementsByClassName('task');
  for (let index = 0; index < getTasks.length; index += 1) {
    getTasks[index].addEventListener('click', setSelectedClass);
  }
}

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

function createButtonII(buttonId) {
  const getBotaoApagaTudo = document.getElementById('botaoApagaTudo');

  const newButton = document.createElement('button');
  newButton.id = buttonId;
  newButton.innerHTML = 'Apagar tarefas';
  getBotaoApagaTudo.appendChild(newButton);
}
createButtonII('apaga-tudo');

function cleanAll() {
  const getCleanButton = document.getElementById('apaga-tudo');
  const getTasks = document.getElementsByClassName('task');
  const getOl = document.getElementById('listaOrdenada');

  getCleanButton.addEventListener('click', function() {
    if (getTasks.length > 0) {
      for (let index = 0; index < getTasks.length; index += 1) {
        getOl.removeChild(getOl.lastChild);
      }
    } else {
      alert('Nenhuma tarefa para ser removida');
    }
  })
}
cleanAll();

function createButtonIII(buttonId) {
  const getBotaoApagaCompleted = document.getElementById('botaoApagaCompleted');

  const newButton = document.createElement('button');
  newButton.id = buttonId;
  newButton.innerHTML = 'Apagar tarefas concluídas';
  getBotaoApagaCompleted.appendChild(newButton);
}
createButtonIII('remover-finalizados');


function cleanCompleted() {
  const getCompletedButton = document.getElementById('remover-finalizados');

  getCompletedButton.addEventListener('click', function () {
    const getTaskList = document.querySelectorAll('.completed');
    for (let index = 0; index < getTaskList.length; index += 1) {
      getTaskList[index].remove();
    }
  })
}
cleanCompleted();

function createButtonSave(buttonId) {
  const getBotaoSave = document.getElementById('botaoSave');

  const newButton = document.createElement('button');
  newButton.id = buttonId;
  newButton.innerHTML = 'Salvar Tarefas';
  getBotaoSave.appendChild(newButton);
}
createButtonSave('salvar-tarefas');

function saveLocalStorage () {
  const getButtonSave = document.getElementById('salvar-tarefas');
  const getTasks = document.getElementsByClassName('task');
  
  getButtonSave.addEventListener('click', function() {
    const arrayObjectsSave = [];
    for (let index = 0; index < getTasks.length; index += 1) {
      const taskObject = {
        text: getTasks[index].innerHTML,
        completed: getTasks[index].classList.contains('completed')
      }
      arrayObjectsSave.push(taskObject);
    }
    const jsonArray = JSON.stringify(arrayObjectsSave);
    localStorage.setItem('Lista de tarefas', jsonArray);
  })
}
saveLocalStorage();

function getTasks() {
  const jsonArray = localStorage.getItem('Lista de tarefas');
  if (!jsonArray) {
    return console.log('0 itens salvos');
  }
  const arraySave = JSON.parse(jsonArray);
  for (let index = 0; index < arraySave.length; index += 1) {
    addTask(arraySave[index].text, arraySave[index].completed);
  }
}
getTasks();

function addTask(task, completed) {
  let getTaskList = document.getElementById('lista-tarefas');
  const newLi = document.createElement('li');
  newLi.innerHTML = task;
  newLi.classList.add('task');
  if (completed) {
    newLi.classList.add('completed');
  }
  getTaskList.appendChild(newLi);
  addClickListener();
  addDoubleClickListener();
}

function createButtonClearSelected(buttonId) {
  const getBotaoClearSelected = document.getElementById('botaoClearSelected');

  const newButton = document.createElement('button');
  newButton.id = buttonId;
  newButton.innerHTML = 'Apagar Selecionado';
  getBotaoClearSelected.appendChild(newButton);
}
createButtonClearSelected('remover-selecionado');

function clearSelected() {
  let getTaskList = document.getElementById('lista-tarefas');
  const getButtonClearSelected = document.getElementById('remover-selecionado');

  getButtonClearSelected.addEventListener('click', function () {
    getTaskList.removeChild(document.querySelector('.selected'));
  })
}
clearSelected();