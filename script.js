const input = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById("lista-tarefas");

function createTask() {
    const tarefa = document.createElement("li");
    tarefa.className = 'tarefa';
    tarefa.innerHTML = input.value;
    listaTarefa.appendChild(tarefa);
    console.log(input.value)
    input.value =''

    function done(event) {
        event.target.style.backgroundColor = 'rgb(128,128,128)';
        event.target.style.textDecoration = "line-through";
    }

    const task = document.querySelectorAll(".tarefa")

    for (let i = 0; i < task.length; i += 1) {
        task[i].addEventListener('click', done);
      }
    
}

document.getElementById("criar-tarefa").addEventListener('click', createTask);

/*function done(event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
    event.target.style.textDecoration = "line-through";
}

const tarefa = document.querySelectorAll(".tarefa")

for (let i = 0; i < tarefa.length; i += 1) {
    tarefa[i].addEventListener('click', done);
  }*/