function clearTextInput() {
    document.querySelector('input').value = '';
}

let buttonAdd = document.querySelector('#criar-tarefa');
let listOfItems = document.querySelector('#lista-tarefas');
buttonAdd.addEventListener('click', () => {
    let valueInput = document.querySelector('input').value;
    let itemList = document.createElement('li');
    itemList.innerHTML = valueInput;
    listOfItems.appendChild(itemList);
    clearTextInput();
})
