const addButton = document.getElementById('criar-tarefa');
let textoTarefa = document.getElementById('texto-tarefa');





 
function bottonAdd () {
  addButton.addEventListener('click', function() {
    let newTask = document.createElement('li');
    let list = document.getElementById('lista-tarefas');
     newTask.innerHTML = textoTarefa.value;
     list.appendChild(newTask);
    
     textoTarefa.value = " ";
      
  });
  


}
bottonAdd ();


