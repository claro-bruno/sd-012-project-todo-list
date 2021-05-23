let criarTarefa = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas'); 
let textoTarefa = document.getElementById('texto-tarefa');


criarTarefa.addEventListener('click', criandoLi) 

function criandoLi (){
let listaLi = document.createElement('li')
listaLi.innerHTML = textoTarefa.value
listaTarefas.appendChild(listaLi)
textoTarefa.value = ''

listaLi.addEventListener('click', colocandoCor)
function colocandoCor (){
    listaLi.style.backgroundColor = 'rgb(128, 128, 128)'
}
}




