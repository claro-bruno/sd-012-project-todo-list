function addItenList() {
  let desc = document.getElementById('texto-tarefa').value;
  if (desc === '') {
    return null;
  }
  let item = document.createElement('li');
  let descItem = document.createElement('p');
  let lista = document.getElementById('lista-tarefas');
  descItem.innerHTML = desc;
  lista.appendChild(item);
  item.appendChild(descItem);
  document.getElementById('texto-tarefa').value = '';
}

window.onload = function main() {
    let button = document.querySelector('#criar-tarefa');
    button.addEventListener('click', addItenList);
}