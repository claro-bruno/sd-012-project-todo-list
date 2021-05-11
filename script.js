document.getElementById('criar-tarefa').addEventListener('click', CreateTask);
function CreateTask() {//cria a tarefa
    const text = document.getElementById('texto-tarefa');
    const task = document.createElement('li');
    document.getElementById('lista-tarefas').appendChild(task);
    task.innerText = text.value;
    text.value = null;
    selectTask();
  }

   function coloringbackground (event) {//atribui a class selected que contém o background cinza.
    event.target.classList.add('selected');
  }

   function selectTask(){//captura o clique na tarefa
    const task = document.getElementsByTagName('li');
    for (let index=0; index < task.length; index +=1){
        task[index].addEventListener('click', coloringbackground);
    }
   }
   
  
