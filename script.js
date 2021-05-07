  
document.addEventListener('click', (event)) => {
    let lista =[];
    if (event.target.id === 'criar-tarefa' && event.target.id.contains(String')) {
        intputListaTarefas.appendChild(lista) 
        const inputTextoTarefa = document.querySelector('#texto-tarefa');
        const intputListaTarefas = document.querySelector('#lista-tarefas');


        for (let    index = 0; index < lista.length; index = += 1) {
            let item =  inputTextoTarefa;
            let itemDaLista = document.createElement('li');
            itemDaLista.innerText = item;

            intputListaTarefas.appendChild(itemDaLista)       
        }
    } 
}