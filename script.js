let textInput = document.getElementById('texto-tarefa')
let addButton = document.getElementById('criar-tarefa')

function addList() {
    var createLi = document.createElement("LI");
    var userInput = document.createTextNode(textInput.value);
    createLi.appendChild(userInput);
    document.getElementById("myList").appendChild(createLi);
}

addButton.addEventListener("click", function(){
    addList()
    textInput.value = ''
})
