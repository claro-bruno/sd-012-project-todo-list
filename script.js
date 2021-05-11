const button = document.querySelector('#criar-tarefa');
const listItems = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
// capturar a lista ordenada
const ol = document.querySelector('#lista-tarefas');

function addTaskList() {
  button.addEventListener('click', () => {
    if (inputTask.value !== '') {
      const newItem = document.createElement('li');
      newItem.innerHTML = inputTask.value;
      listItems.appendChild(newItem);
      inputTask.value = '';
    }
  });
}
addTaskList();

// Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)

// Fazer um escutador de eventos de click na lista toda
ol.addEventListener('click', (event) => {
  // acessar o bgColor da minha lista clicada usar o event.target
  const clickedList = event.target.style;
  clickedList.backgroundColor = 'rgb(128,128,128)';
});
