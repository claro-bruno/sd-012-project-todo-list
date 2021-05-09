const input = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById("lista-tarefas");

function grey(event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
}
function done(event) {
    if(event.target.classList.contains('completed')){
    event.target.classList.remove('completed')
    event.target.style.textDecoration = 'none'
    } else {
    event.target.classList.add('completed')
    event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
    }
}

function createTask() {
    const tarefa = document.createElement("li");
    tarefa.classList.add('tarefa');
    tarefa.innerHTML = input.value;
    listaTarefa.appendChild(tarefa);
    console.log(input.value)
    input.value =''
    tarefa.addEventListener('click', grey);
    tarefa.addEventListener('dblclick', done);
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