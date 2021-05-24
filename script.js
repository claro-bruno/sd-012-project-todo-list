let criarTarefa = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas'); 
let textoTarefa = document.getElementById('texto-tarefa');
let apagarTudo = document.getElementById('apaga-tudo');
let tirarFinalizados = document.getElementById('remover-finalizados')
let tarefasSalvas = document.getElementById('salvar-tarefas')
window.onload = () => {
    listaTarefas.innerHTML = localStorage.getItem('lista-tarefas')
}

criarTarefa.addEventListener('click', () => {
let listaLi = document.createElement('li')
listaLi.innerHTML = textoTarefa.value
listaTarefas.appendChild(listaLi)
textoTarefa.value = ''
}) 
function adicionandoCor () {

let filhosDeListaTarefas = document.getElementsByTagName('li')
    listaTarefas.addEventListener('click', (event) => {
   for(let index = 0; index < filhosDeListaTarefas.length; index += 1){
       filhosDeListaTarefas[index].classList.remove('addColor')  
   }
   event.target.classList.add('addColor')
})
}
adicionandoCor()

function tarefaCompleta (){
    listaTarefas.addEventListener('dblclick', (event) => {
        event.target.classList.toggle('completed')

    })

}
tarefaCompleta()

function apagaTudo () {
 apagarTudo.addEventListener('click', () => {
     listaTarefas.innerHTML = ''
 })   
}
apagaTudo()

function tirandoTarefasFinalizadas () {
 tirarFinalizados.addEventListener('click', () => {
     let completed = document.querySelectorAll('.completed')
     
    completed.forEach((A) => {
        A.remove()
    });
 })
}
tirandoTarefasFinalizadas()

function salvandoTarefas (){
tarefasSalvas.addEventListener('click', () => {
    localStorage.setItem('lista-tarefas', listaTarefas.innerHTML)
})
}
salvandoTarefas()