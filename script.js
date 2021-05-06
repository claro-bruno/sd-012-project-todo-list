window.onload = function() {
    
    let criar_tarefa = document.getElementById('criar-tarefa');
    let texto_tarefa = document.getElementById('texto-tarefa');
    let lista_tarefas = document.getElementById('lista-tarefas');
    let apaga_tudo = document.getElementById('apaga-tudo');
    
    criar_tarefa.addEventListener('click', addTarefa);
    apaga_tudo.addEventListener('click', apagaTudo);

    function addTarefa() {
        if (texto_tarefa.value != '') {
            let li = document.createElement('li');
            li.innerHTML = texto_tarefa.value;
            li.className = 'no-select'
            li.addEventListener('click', selectTarefa);
            li.addEventListener('dblclick', completedTarefa);
            lista_tarefas.appendChild(li);
            texto_tarefa.value = '';
        }
    }

    function selectTarefa(event) {
        let lis = document.getElementsByTagName('li');
        for(let i = 0; i < lis.length; i++) {
            if (lis[i].className == 'select') {
                lis[i].className = 'no-select'
            }
            else if (lis[i].className == 'select completed') {
                lis[i].className = 'no-select completed'
            }
        }
        if (event.target.className == 'select completed') {
            event.target.className = 'select completed';
        }
        else if (event.target.className == 'select') {
            event.target.className = 'select';
        }
        else if (event.target.className == 'no-select') {
            event.target.className = 'select';
        }
        else if (event.target.className == 'no-select completed'){
            event.target.className = 'select completed';
        }
        else if(event.target.className == 'completed') {
            event.target.className = 'select completed';
        }
    }

    function completedTarefa(event) {
        if (event.target.className == 'no-select completed') {
            event.target.className = 'no-select';
        }
        else if (event.target.className == 'select completed') {
            event.target.className = 'select';
        }
        else{
            event.target.className = 'completed';
        }
    }

    function apagaTudo() {
        let lis = document.getElementsByTagName('li');
        let length = lis.length;
        for(let i = 0; i < length; i++) {
            lista_tarefas.removeChild(lista_tarefas.firstChild);
        }
    }
}