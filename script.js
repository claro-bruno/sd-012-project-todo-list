const listaTarefa = document.getElementById('lista-tarefas');

function createLi(){
    const inputTexto = document.getElementById('texto-tarefa');
    const criarTarefa = document.getElementById('criar-tarefa');

    criarTarefa.addEventListener('click', () => {
        const criarLista = document.createElement('li');
        criarLista.className = 'task';
        criarLista.innerHTML = inputTexto.value;
        listaTarefa.appendChild(criarLista);
        inputTexto.value = '';
    })
}
createLi();