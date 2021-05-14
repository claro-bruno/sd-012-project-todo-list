// Algoritmo da colega Laura Ramos
const removeEnd = document.querySelector('#remover-finalizados');
const selectButton = document.querySelector('#criar-tarefa');
const selectInput = document.querySelector('#texto-tarefa');
const clearList = document.querySelector('#apaga-tudo');
const addOl = document.querySelector('#lista-tarefas');

selectButton.addEventListener('click', function () {
  if (selectInput.value != 0) {
    const createTask = document.createElement('li');
    createTask.innerText = selectInput.value;
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

// Algoritmo do colega Andre Lorenzoni
removeEnd.addEventListener('click', function () {  
  const li = document.querySelectorAll('.completed');  
  for (let index = 0; index < li.length; index += 1) {
      li[index].parentNode.removeChild(li[index]);
  }
});

// Algoritmos do colega João Vieira
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
    classe.style.backgroundColor = '';
  }
  event.target.classList.add("selected");   
  event.target.style.backgroundColor = "rgb(128,128,128)"; 
});
