const inputButton = document.getElementById("texto-tarefa");
const taskList = document.getElementById("lista-tarefas");
const input = document.getElementById("criar-tarefa");

input.addEventListener('click', () => {
    const taskBoard = document.createElement("li");
    taskBoard.innerHTML = inputButton.value;
    inputButton.value = '';
    event.preventDefault();
    taskList.appendChild(taskBoard);
});   

// Em pesquisa foi localizada a função preventDefault(), evitando que o envio da tarefa resete o formulário, gravando seu conteúdo; acessado em (https://www.w3schools.com/jsref/event_preventdefault.asp)

const itemList = document.querySelectorAll('.item-list');

function selectedList() {
    const backgroundItem  = document.querySelectorAll('.item-list');
  for (const item of itemList) {
      item.addEventListener('click', () => {
          for(const secondItem of itemList) {
              secondItem.classList.remove('selected');
          }
          item.classList.add('selected');
      });
  }
}

// item 7 e 8 - tentativa de implemento de soluçao através do repositorio da colega Juliane Marques (https://github.com/tryber/sd-012-project-todo-list/pull/119/files#)