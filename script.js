window.onload = function() {
    let btn = document.getElementById('criar-tarefa');
    let listaTarefas = document.getElementById('lista-tarefas');
    let entrada = document.getElementById('texto-tarefa');
    
    function criaTarefa() {
        btn.addEventListener('click', function() {
            let listItem = document.createElement('li');
            let tarefa = entrada.value;
            listaTarefas.appendChild(listItem);
            listItem.innerHTML = tarefa;
            entrada.value = '';
        });
    }
    criaTarefa();
}