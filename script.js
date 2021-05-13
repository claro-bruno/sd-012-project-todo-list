let list = document.querySelector("#list")   

function createList(event){
  let criaList = document.createElement("li")
  criaList.id = "listas" 
    event.preventDefault();  
     document.querySelector("#lista-tarefas").appendChild(criaList)
     let valor = document.getElementById("texto-tarefa")
     criaList.innerHTML = valor.value
     valor.value = "";
     //let changeColor = criaList;
     //changeColor.addEventListener("click",change)
    }
    
let buttonClick = document.getElementById("criar-tarefa")
buttonClick.addEventListener("click", createList)

document.getElementById("lista-tarefas").addEventListener("click", (event) =>{
  let task = document.getElementsByTagName("li");
  for(let index = 0; index < task.length; index += 1){
  task[index].style.backgroundColor ='';
  }
  let taskSelected = event.target;
  taskSelected.style.backgroundColor = "rgb(128, 128, 128)"
})  

document.getElementById("lista-tarefas").addEventListener("dblclick", (event) =>{
  let taskDefined = event.target;

  if(taskDefined.classList.contains("completed")){
    taskDefined.style.textDecoration = "none"
    taskDefined.classList.remove("completed")
  }
  else {
    taskDefined.classList.add("completed");
    taskDefined.style.textDecoration = "line-through solid rgb(0, 0, 0)";
  }
})



