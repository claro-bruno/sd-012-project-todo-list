window.onload = function() {
    
    let criar_tarefa = document.getElementById('criar-tarefa');
    let texto_tarefa = document.getElementById('texto-tarefa');
    let lista_tarefas = document.getElementById('lista-tarefas');
    
    criar_tarefa.addEventListener('click', addTarefa);

    function addTarefa() {
        if(texto_tarefa.value != '') {
            let li = document.createElement('li');
            li.innerHTML = texto_tarefa.value;
            lista_tarefas.appendChild(li);
            texto_tarefa.value = '';
        }
    }
}