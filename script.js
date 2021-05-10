const input = document.getElementById('texto-tarefa');
const botaoAdd = document.getElementById('criar-tarefa');

function catchInput() {
    botaoAdd.addEventListener('click', () => {
      const createLi = document.createElement('li');
      createLi.className = 'item-list';
      createLi.innerHTML = input.value;
      taskList.appendChild(createLi);
      input.value = '';
      selectItem();
    });
  }