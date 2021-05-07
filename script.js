function criarItem(event) {
    const itemLista = document.createElement('li')
    itemLista.className = 'lista'
    document.querySelector('#lista-tarefas').appendChild(itemLista)
    let valorList = document.getElementById('texto-tarefa').value

    itemLista.innerHTML = valorList

}

let clickButton = document.getElementById("criar-tarefa")
clickButton.addEventListener('click', criarItem)