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
    } else {previous.className = ''}
    event.target.className = 'selected';
  })
}
clicar128();