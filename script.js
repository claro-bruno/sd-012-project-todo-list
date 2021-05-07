window.onload = function() {
    let btn = document.getElementById('criar-tarefa');
    let listaTarefas = document.getElementById('lista-tarefas');
    let entrada = document.getElementById('texto-tarefa');
    
    function criaTarefa() {
        btn.addEventListener('click', function() {
            let listItem = document.createElement('li');
            listItem.addEventListener('click', function() {
                if(document.querySelector('.itemLista') === null)
                listItem.classList.add('itemLista');
                else
                listItem.classList.remove('itemLista');
            })
            let tarefa = entrada.value;
            listaTarefas.appendChild(listItem);
            listItem.innerHTML = tarefa;
            entrada.value = '';
        });
    }

    criaTarefa();

}