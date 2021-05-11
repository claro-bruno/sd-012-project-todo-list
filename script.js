let textInput = document.getElementById('texto-tarefa')
let addButton = document.getElementById('criar-tarefa')
let listItem = document.getElementsByTagName('li')

function addList() {
    var createLi = document.createElement("LI");
    var userInput = document.createTextNode(textInput.value);
    createLi.appendChild(userInput);
    document.getElementById('lista-tarefas').appendChild(createLi);
}

function LiClass(){
    for (let index = 0; index < listItem.length; index+= 1) {
        listItem[index].setAttribute('class', 'listItem')
    }
}


function clearBackground(){
    for (let index = 0; index < listItem.length; index+= 1) {
        listItem[index].style.backgroundColor = 'white'
    }
}


addButton.addEventListener("click", function(){
    addList()
    LiClass()
    textInput.value = ''
})

document.body.addEventListener("click", function(event){
    if(event.target.className === "listItem"){
        clearBackground()
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'  
    }
  })