const criarTarefa = () => {
    let textoTarefa = document.querySelector('#texto-tarefa');
    const listaDeTarefas = document.querySelector('#lista-tarefas');

    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = textoTarefa.value
    listaDeTarefas.appendChild(novaTarefa);

    textoTarefa.value = ''
}