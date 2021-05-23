let criarTarefa = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas'); 
let textoTarefa = document.getElementById('texto-tarefa');

criarTarefa.addEventListener('click', () => {;
let listaLi = document.createElement('li')
listaLi.innerHTML = textoTarefa.value
listaTarefas.appendChild(listaLi)
textoTarefa.value = ''
})    


