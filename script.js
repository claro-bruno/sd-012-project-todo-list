const addButton = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');



//requisito 5
function bottonAdd () {
addButton.addEventListener('click', function() {
const newTask = document.createElement('li'); 
  
newTask.innerHTML = textoTarefa.value;  
list.appendChild(newTask);    
textoTarefa.value  = " ";     
      
});
}
bottonAdd ();


list.addEventListener('click', function(event) {
  const target = event.target;
    target.classList.toggle('selected');

 });


//  function tarefaCompletada () {
//   let completTarget = eventComp.target;
//   list.addEventListener('dblclick', function(eventComp)
//   eventComp.target.classList.toggle('completed');

//  }
  
 
 
