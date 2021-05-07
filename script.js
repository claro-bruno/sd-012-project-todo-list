function criarItem(event) {
    const itemLista = document.createElement('li')
    document.querySelector('#lista-tarefas').appendChild(itemLista)
    let valorList = document.getElementById('texto-tarefa').value
    itemLista.addEventListener('click', function() {

        if (itemLista.classList.contains('lista')) {
            itemLista.classList.remove('lista')
        } else {
            itemLista.className = 'lista'
        }
    })
    itemLista.innerHTML = valorList
    document.getElementById('texto-tarefa').value = ""


}

let clickButton = document.getElementById("criar-tarefa")
clickButton.addEventListener('click', criarItem)

let clickList = document.querySelector('.lista')