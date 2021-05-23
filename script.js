
function addTarefa(){

    const text = document.getElementById('texto-tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');
    const tagLi = document.createElement('li')

// Item inspirado na página https://www.fabiobmed.com.br/site/verificar-se-um-campo-do-formulario-esta-vazio-via-javascript/
    if (text.value === '') {
        alert('Por favor, preencha o campo nome');
        text.focus();
    }    

   tagLi.innerHTML = text.value

   listaTarefas.appendChild(tagLi);
   text.value = '';
}