const buttonAdd = document.getElementById('criar-tarefa')
const textInput = document.getElementById('texto-tarefa')
const list  = document.getElementById('lista-tarefas')
const inputValue = textInput.value 
const listFirstItem = document.getElementsByTagName('ol')[0];
const liListItems = document.getElementsByTagName('li');


function createList () {
  buttonAdd.addEventListener('click', (event) => {
    const addTextItem = document.createElement('li')
    list.appendChild(addTextItem)
    const inputValue = textInput.value 
    addTextItem.innerText = inputValue
    textInput.value = "";
    addTextItem.classList.add('list-item')
  });
}
createList()

// Requisito 7  Minha nossa, nem eu acredito que esse trem funcionou 

function grayClick () {
  listFirstItem.addEventListener('click', (event) => {
    const clickItem = event.target
      for (let index= 0; index < liListItems.length; index += 1){
        liListItems[index].style.backgroundColor = document.body.style.backgroundColor;
          if (clickItem.localName = 'li') { 
            clickItem.style.backgroundColor = 'rgb(128,128,128)'
        }
      };
  });
}
grayClick()

// requisito 8

function lineThrough () {
  list.addEventListener('dblclick', (event) => {
    const dblclickItem = event.target;
    if (dblclickItem.classList.contains('completed')) { 
        dblclickItem.classList.remove('completed');
      } else {
        dblclickItem.classList.add('completed');
      };
    });
  
}
lineThrough ()