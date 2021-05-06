
/* Function Title creates <h1> Title based on the string
used as parameter */
function title(string) {
    let title = document.querySelector('h1');
    title.innerHTML = string;
}
title('Minha Lista de Tarefas');

/* Function instructionText creates <p> text based on the string
used as parameter */
function instructionText(string) {
    let instructions = document.getElementById('funcionamento');
    instructions.innerHTML = string;
}
instructionText('Clique duas vezes em um item para marcá-lo como completo');

/* Function newTasks creates a <li> with the content from input box. If
input.value = '' it alerts the user to fill the input and stops the function. */
function newTasks() {
    let button = document.querySelector('#criar-tarefa');
    let input = document.querySelector('#texto-tarefa');
    let list = document.querySelector('#lista-tarefas');

    button.addEventListener('click', function(){
        if (input.value === ""){
            alert('Preencha qual atividade deseja adicionar.');
        } else {
            let listItem = document.createElement('li')
            listItem.innerHTML = input.value;
            listItem.className = 'listItem';
            list.appendChild(listItem);
            input.value = "";
        }
    })
}
newTasks();

