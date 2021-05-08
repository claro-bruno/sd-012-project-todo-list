// Requisitos 5 e 6
function inputNewTask() {
  const getTextInput = document.getElementById('texto-tarefa');
  const clickButton = document.getElementById('criar-tarefa');
  const getTaskListLo = document.getElementById('lista-tarefas');
  
  clickButton.addEventListener('click', function() {
  const newLi = document.createElement('li');
  newLi.innerText = getTextInput.value;
  newLi.addEventListener('click', clickNoLi); //evento de clique no li
  newLi.classList.add('li-estilo');
  getTaskListLo.appendChild(newLi);
  getTextInput.value = '';
  });
}
inputNewTask();
  // Requisito 7 e 8 - Clicar em um item da lista deve alterar 
  // a cor de fundo do item para cinza rgb(128,128,128)
function clickNoLi(event) {
  const removerSelecao = document.querySelector('.selected');
  if (removerSelecao !== null) {
    removerSelecao.classList.remove('selected');
  }
  event.target.classList.add('selected');
}