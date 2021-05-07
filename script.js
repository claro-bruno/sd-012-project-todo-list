function criarItem(event) {
    const itemLista = document.createElement('li')
    document.querySelector('#lista-tarefas').appendChild(itemLista)
    let valorList = document.getElementById('texto-tarefa').value
    itemLista.addEventListener('click', function() {
        itemLista.className = 'lista'
    })
    itemLista.innerHTML = valorList
    valorList

}

let clickButton = document.getElementById("criar-tarefa")
clickButton.addEventListener('click', criarItem)