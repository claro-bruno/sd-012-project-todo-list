const input = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
// Captura o texto do input e adiciona a lista
function catchInput () {  
  btnAdd.addEventListener('click', () => {
    let taskList = document.getElementById('lista-tarefas');
    let createLi = document.createElement('li');
    createLi.innerHTML = input.value;
    taskList.appendChild(createLi);
    input.value = '';
  });      
}
catchInput();