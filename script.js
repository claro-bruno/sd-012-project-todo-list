// Algoritmo da colega Laura Ramos
const removeEnd = document.querySelector('#remover-finalizados');
const selectButton = document.querySelector('#criar-tarefa');
const selectInput = document.querySelector('#texto-tarefa');
const clearList = document.querySelector('#apagar-tudo');
const addOl = document.querySelector('#lista-tarefas');

selectButton.addEventListener('click', function () {
  if (selectInput.value != 0) {
    const createTask = document.createElement('li');
    createTask.innerText = selectInput.value;
    createTask.className = 'notSelected';
    selectInput.value = '';
    addOl.appendChild(createTask);
  } else {
    alert('Não é possível criar uma tarefa vazia!');
  }
});

clearList.addEventListener('click', function () {
  let ol = document.getElementsByTagName('ol')[0];
  ol.innerText = '';
});
/*
const paleta = document.getElementById('lista-tarefas');
  for (let index = 0; index < paleta.length; index += 1) {
    paleta[index].addEventListener('click', function(event) {      
    let removeSelection = document.querySelector('.selected');
    removeSelection.classList.remove('selected');
    event.target.classList.add('selected');
  });
  
}

const li = document.querySelector('li');
li.addEventListener('dblclick', () => {
  const allLIs = document.getElementsByTagName(li);
  for (let li of allLIs) {
    li.classList.toggle('completed');
  }
});
*/
addOl.addEventListener('dblclick', function (event) {
  if(!event.target.classList.contains("completed")){
    event.target.classList.add("completed");
  } else{
    event.target.classList.remove("completed");
  }
});

addOl.addEventListener('click', function (event) {
  let classe = document.getElementsByClassName("selected")[0];
  if(classe){
    classe.classList.remove("selected");
    classe.style.backgroundColor = "";
  }
  event.target.classList.add("selected");   
  event.target.style.backgroundColor = "rgb(128,128,128)"; 
});
