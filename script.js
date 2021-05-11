const inputTask = document.getElementById("texto-tarefa");
const taskList = document.getElementById("lista-tarefas");
const buttonCreateTask = document.getElementById("criar-tarefa");
const completedTask = document.getElementById("funcionamento");
const buttonDeleteAll = document.getElementById("apaga-tudo");
const buttonRemoveComplet = document.getElementById("remover-finalizados");

// funçao para mostrar as tarefas adicionadas
// atribuir o conteudo digitado na caixa ao elementTask, assim, quando o conteúdo da caixa for diferente de vazio, o contéudo será adicionado em forma de lista ordenada pela hierarquica da TASKLIST e após, o element task é limpo. Assim, ao acionar o botao, a função é executada.

function createTask () {
    const elementTask = inputTask;
    if (elementTask !== '') {
        const createItem = document.createElement('li');
        createItem.innerText = elementTask.value;
        event.preventDefault()
        taskList.appendChild(createItem);
        elementTask.value = '';
    }
}
buttonCreateTask.addEventListener('click', createTask);
// Em pesquisa foi localizada a função preventDefault(), evitando que o envio da tarefa resete o formulário, gravando seu conteúdo; acessado em (https://www.w3schools.com/jsref/event_preventdefault.asp)



