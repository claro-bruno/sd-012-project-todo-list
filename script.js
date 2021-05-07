let list = document.querySelector("#list")


function createList(event){
    event.preventDefault();
     let criaList = document.createElement("li")
     criaList.id = "listas"   
     document.querySelector("#lista-tarefas").appendChild(criaList)
     let valor = document.getElementById("texto-tarefa")
     criaList.innerHTML = valor.value
     valor.value = "";
    
    }
    
let buttonClick = document.getElementById("criar-tarefa")
buttonClick.addEventListener("click", createList)

  