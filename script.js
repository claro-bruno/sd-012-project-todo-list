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

// altera função anterior para acrescentar a classe selected em um único item que é removida quando clicado em outro, ao mesmo tempo que, através da classe, altera o background color.
//Foi utilizada a propriedade localName do DOM, localizada através de pesquisa no https://www.w3schools.com/xml/prop_element_localname.asp

const colorChange = document.getElementById('lista-tarefas');

function changeBackgroundColor (event) {
    const local = document.querySelector('.selected');
    if (local!== null) {
        local.classList.remove('selected');
    }
    if (event.target.localName === "li"){
        event.target.classList.add('selected');
    };
}

colorChange.addEventListener('click', changeBackgroundColor)