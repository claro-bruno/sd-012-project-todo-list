window.onload = function() {
    
    let criar_tarefa = document.getElementById('criar-tarefa');
    let texto_tarefa = document.getElementById('texto-tarefa');
    let lista_tarefas = document.getElementById('lista-tarefas');
    
    criar_tarefa.addEventListener('click', addTarefa);

    function addTarefa() {
        if(texto_tarefa.value != '') {
            let li = document.createElement('li');
            li.innerHTML = texto_tarefa.value;
            li.className = 'no-select'
            li.addEventListener('click', selectTarefa);
            lista_tarefas.appendChild(li);
            texto_tarefa.value = '';
        }
    }

    function selectTarefa(event) {
        let lis = document.getElementsByTagName('li');
        for(let i = 0; i < lis.length; i++) {
            if(lis[i].className = 'select') {
                lis[i].className = 'no-select'
            }
        }
        event.target.className = 'select';
    }
}