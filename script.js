const addToListButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const typedTextInput = document.getElementById('texto-tarefa');

addToListButton.addEventListener('click', () => {
  const textAsItemList = document.createElement('li');
  textAsItemList.innerHTML = typedTextInput.value;
  taskList.appendChild(textAsItemList);
});

addToListButton.addEventListener('click', () => {
  typedTextInput.value = '';
});
