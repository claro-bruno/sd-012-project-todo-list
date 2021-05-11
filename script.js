const addButton = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
let list = document.getElementById('lista-tarefas');




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

  
 
 
