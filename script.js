
function addTarefa(){
   
    const text = document.getElementById('texto-tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');
    const tagLi = document.createElement('li')

    if (text.value === '') {
        alert('Por favor, preencha o campo nome');
        text.focus();
    }    

   tagLi.innerHTML = text.value

   listaTarefas.appendChild(tagLi);
}