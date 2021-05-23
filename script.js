
function addTarefa(){

    const text = document.getElementById('texto-tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');
    const tagLi = document.createElement('li')

// Item inspirado na página https://www.fabiobmed.com.br/site/verificar-se-um-campo-do-formulario-esta-vazio-via-javascript/
    if (text.value === '') {
        alert('Por favor, preencha o campo nome');
        text.focus();
    }else{
        tagLi.innerHTML = text.value
        tagLi.classList.add('tarefa'); 
        listaTarefas.appendChild(tagLi);
        text.value = '';
    }   

  
}


// Baseado no link https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('tarefa')) {
        bgCinza(event);
    };
  });

function bgCinza(event){  

    const tarefas = document.querySelectorAll('.tarefa');
    const tarefa = event.target;

    for (let index = 0; index < tarefas.length; index += 1) {
        tarefas[index].classList.remove('bgGray');    
    }

    event.target.classList.add('bgGray');          


}