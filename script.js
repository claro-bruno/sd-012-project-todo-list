let button = document.getElementById("criar-tarefa")  

button.addEventListener('click', (event) => {
    console.log("cheguei aqui")
    let itemDaLista = document.createElement('li');
    const inputTextoTarefa = document.querySelector('#texto-tarefa');
    const ListaTarefas = document.querySelector('#lista-tarefas');
    ListaTarefas.appendChild(itemDaLista) 
    itemDaLista.innerText = inputTextoTarefa.value;
    inputTextoTarefa.value = '';
})