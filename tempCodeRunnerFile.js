function bottonAdd () {
  addButton.addEventListener('click', function() {
    let newTask = document.createElement('li');
    let list = document.getElementById('lista-tarefas');
     newTask.innerHTML = textoTarefa.value;
     list.appendChild(newTask);
    
     textoTarefa.value = " ";
      
  });
  