//CRIA CONST PARA RESGATAR O BOTAO PELO ID:
const addTask = document.getElementById('criar-tarefa');

//CRIA CONST PARA RESGATAR A LISTA ORDENADA PELO ID:
const taskList = document.getElementById('lista-tarefas');

//CRIA CONST PARA RESGATAR A TAG INPUT PELO ID:
const taskText = document.getElementById('texto-tarefa');

//CRIANDO A FUNÇÃO DE ADD A TASK E CRIAR UMA TAG li PARA ADICIONAR A ol: Usei o listener pra criar o click e atribui a função. Criei a const que cria uma tag li para ser adiciona a lista ordenada. Atribui o valor da task (que sera colocada na lista li) resgatado do input, usando taskText.value, ou seja, ele pega o valor que foi dado ao elemento com a id taskText. Coloquei a li (task) como filha da ol com id taskList. Por fim atrivui o valor de taskText a uma string vazia, pois é o estado inicial dela antes de ser preenchido meu input

addTask.addEventListener('click', () => {
    const task = document.createElement('li');
    task.innerHTML = taskText.value;
    taskList.appendChild(task);
    taskText.value = '';
})


    