const input = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById("lista-tarefas");

function createTask() {
    const tarefa = document.createElement("li");
    tarefa.className = 'tarefa';
    tarefa.innerHTML = input.value;
    listaTarefa.appendChild(tarefa);
    console.log(input.value)
    input.value =''
}

document.getElementById("criar-tarefa").addEventListener('click', createTask);