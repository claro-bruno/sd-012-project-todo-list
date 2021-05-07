function criarItem(event) {

    //criado a "li" e adicionado na lista
    const itemLista = document.createElement('li')
    document.querySelector('#lista-tarefas').appendChild(itemLista)

    //pego o valor da caixa de entrada
    let valorList = document.getElementById('texto-tarefa').value

    // criado o evento para colorir a li e descolorir
    itemLista.addEventListener('click', function(event) {
        const listaTodos = document.querySelectorAll('li')
        for (let index = 0; index < listaTodos.length; index += 1) {
            if (listaTodos[index].classList.contains('lista')) {
                listaTodos[index].classList.remove('lista')
            }

            event.target.classList.add('lista')
        }

    })
    itemLista.innerHTML = valorList
    document.getElementById('texto-tarefa').value = ""


}

let clickButton = document.getElementById("criar-tarefa")
clickButton.addEventListener('click', criarItem)