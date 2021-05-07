    function makeList() {
        let li = document.createElement('li');
        let userTask = document.getElementById('texto-tarefa').value;
        let listItem = document.createTextNode(userTask);
        li.appendChild(listItem);
        if (userTask === '') {
          alert('Escreva uma tarefa!');
        } else {
          document.getElementById('lista-tarefas').appendChild(li);
        }
        document.getElementById('texto-tarefa').value ='';
    }