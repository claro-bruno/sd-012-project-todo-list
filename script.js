let input = document.querySelector('#texto-tarefa')
let button = document.querySelector('#criar-tarefa')
let ol = document.querySelector('#lista-tarefas')

function addTask() {
    const tarefa = document.createElement('li');
    tarefa.innerHTML = input.value;
    tarefa.className = 'itemList'
    ol.appendChild(tarefa);
    input.value = '';
  }
  button.addEventListener('click', addTask);
  
ol.addEventListener('click', selectColor);
  function selectColor(event) {
  const seleciona = document.querySelector('.selected');
   if (seleciona !== null) {
    seleciona.classList.remove('selected'); 
}
    event.target.classList.add('selected');
    
}
