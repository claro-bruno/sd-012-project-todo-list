// Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

const button = document.querySelector('#criar-tarefa');
const listItems = document.querySelector('#lista-tarefas');
// Capturar o valor do input
const inputTask = document.querySelector('#texto-tarefa');
// criar um evento de click
button.addEventListener('click', () => {
  if (inputTask.value !== '') {
    const newItem = document.createElement('li');
    // O valor do input deve ser igual ao texto da minha lista
    newItem.innerText = inputTask.value;
    // adicionar como filho da lista
    listItems.appendChild(newItem);
    // Limpar o valor do input
    inputTask.value = '';
  }
});
