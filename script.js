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
    if (event.target.className == 'completed' || event.target.className == 'completed selected') {
      event.target.classList.remove('completed');
      console.log(event.target.className);
    } else {
      event.target.classList.add('completed');
      console.log(event.target.classList);
    }
  });
}
clicarRiscar();