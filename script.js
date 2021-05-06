function buttonClick () {
    let getButton = document.querySelector('#criar-tarefa');
    let getUL = document.querySelector('#lista-tarefas');
    let inputValue = document.querySelector('#texto-tarefa').value;
    let newListItem = document.createElement('li');

    getButton.addEventListener('click', function() {
        newListItem.innerHTML = inputValue;
        console.log(newListItem)
        getUL.appendChild(newListItem)

        inputValue = '';
    })
}
console.log(newListItem)
buttonClick();