let list = document.querySelector("#list")
function createOl (result){
    for(let index = 0; index < result; index += 1){
     let criaol = document.createElement("ol")
     criaol.id = "lista-tarefas"   
     list.appendChild(criaol)

    }
}
createOl(3)