// faz o botao criar uma tarefa
function criarTarefa() {
  let input = document.getElementById('texto-tarefa');
  let botao = document.getElementById('criar-tarefa');
  let orderedList = document.getElementById('lista-tarefas');
  botao.addEventListener('click', function() {
    if (input.value !== '') {
      let listItem = document.createElement('li');
      listItem.innerHTML = input.value;
      orderedList.appendChild(listItem);
      textEqualWidth(orderedList);
      input.value = ''
    } else {alert('Nenhuma tarefa adicionada!')}
  });
}
criarTarefa();

// cursor pointer do tamanho do conteúdo
function textEqualWidth(lista) {
  let text = document.getElementById('texto-tarefa').value;
  let textLength = text.length;
  //lista.style.width = `${textLength}px`
  lista.style.cursor = 'pointer'
}

// pinta só um de cinza
function clicar128() {
  let orderedList = document.getElementById('lista-tarefas');
  orderedList.addEventListener('click', function(event) {
    let previous = document.querySelector('.selected');
    if (!previous) {
    } else { previous.classList.remove('selected') }
    event.target.classList.add('selected');
  })
}
clicar128();

// double click para riscar
function clicarRiscar() {
  let orderedList = document.getElementById('lista-tarefas');
  orderedList.addEventListener('dblclick', function(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
clicarRiscar();

// faz botão apagar tudo
function apagaTudo() {
  let botao = document.getElementById('apaga-tudo');
  let orderedList = document.getElementById('lista-tarefas');
  botao.addEventListener('click', function() {
    orderedList.innerHTML = '';
  });
}
apagaTudo();

// apaga tarefas completadas
function removeCompleted() {
  let botao = document.getElementById('remover-finalizados');
  botao.addEventListener('click', function() {
  let completed = document.querySelectorAll('.completed');
    for (let i = 0; i < completed.length; i++) {
      completed[i].remove();
    }
  });
}
removeCompleted();