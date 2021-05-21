let addButton = document.getElementById('criar-tarefa');
let textoTarefa = document.getElementById('texto-tarefa');
let list = document.getElementById('lista-tarefas');



//requisito 5
function bottonAdd () {
addButton.addEventListener('click', function() {
let newTask = document.createElement('li'); 
  
newTask.innerHTML = textoTarefa.value;  
list.appendChild(newTask);    
textoTarefa.value  = " ";     
      
});
}
bottonAdd ();


list.addEventListener('click', function(event) {
  let target = event.target;
    target.classList.toggle('selected');

 });


//  function tarefaCompletada () {
//   let completTarget = eventComp.target;
//   list.addEventListener('dblclick', function(eventComp)
//   eventComp.target.classList.toggle('completed');

//  }
  
 
 
