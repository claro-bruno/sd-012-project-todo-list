const inputButton = document.getElementById("texto-tarefa");
const taskList = document.getElementById("lista-tarefas");
const input = document.getElementById("criar-tarefa");
const itemList = document.querySelectorAll('.item-list');

input.addEventListener('click', () => {
    const taskBoard = document.createElement("li");
    taskBoard.innerHTML = inputButton.value;
    inputButton.value = '';
    event.preventDefault();
    taskList.appendChild(taskBoard);
});   

// Em pesquisa foi localizada a função preventDefault(), evitando que o envio da tarefa resete o formulário, gravando seu conteúdo; acessado em (https://www.w3schools.com/jsref/event_preventdefault.asp)

function backgroundColor () {
    let selectText = document.querySelectorAll('#lista-tarefas');
    for (let index = 0; index < selectText.length; index += 1){
        selectText[index].addEventListener('click', function (event) {
            let selectedItem = event.target;
            let selectedColor = 'rgb(128,128,128)';
            selectedItem.style.backgroundColor = selectedColor;
          });  
        selectText[index].style.backgroundColor = 'white';
    }
}
backgroundColor();

function changeBackgroundColor () {
    let selectText = document.querySelectorAll('#lista-tarefas');
    for (let index = 0; index < selectText.length; index += 1) {
        selectText.addEventListener('click', backgroundColor);
    };
};
changeBackgroundColor()



// item 7 e 8 - tentativa de implemento de soluçao através do repositorio da colega Juliane Marques (https://github.com/tryber/sd-012-project-todo-list/pull/119/files#)