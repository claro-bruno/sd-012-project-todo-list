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

function selectedItem(event) {
    let itemList = document.querySelectorAll('li');
    for (let index = 0; index < itemList; index += 1) {
        itemList[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
}

let listItem = document.querySelector('#lista-tarefas');
listItem.addEventListener('click', selectedItem);
