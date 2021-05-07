// Requisitos 5 e 6
function inputNewTask() {
  let getTextInput = document.getElementById('texto-tarefa');
  let clickButton = document.getElementById('criar-tarefa');
  let getTaskListLo = document.getElementById('lista-tarefas');

  clickButton.addEventListener('click', function secoundfunc() {
    let newLi = document.createElement('li');
    newLi.innerText = getTextInput.value;
    newLi.classList.add('li-estilo');
    getTaskListLo.appendChild(newLi);
    getTextInput.value = '';
  }
  );
}
inputNewTask();

