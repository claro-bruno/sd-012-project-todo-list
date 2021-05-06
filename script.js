const buttonAdd = document.getElementById('criar-tarefa')
const textInput = document.getElementById('texto-tarefa')
const list  = document.getElementById('lista-tarefas')

function createList () {
  buttonAdd.addEventListener('click', (event) => {
    const addTextItem = document.createElement('li')
    list.appendChild(addTextItem)
    const inputValue = textInput.value 
    addTextItem.innerHTML = inputValue
  })
}
createList()