function addItenList() {
  let desc = document.getElementById('texto-tarefa').value;
  if (desc === '') {
    return null;
  }
  let item = document.createElement('li');
  let descItem = document.createElement('p');
  let lista = document.getElementById('lista-tarefas');
  descItem.innerHTML = desc;
  descItem.className = 'itemSelecionado'
  lista.appendChild(item);
  item.appendChild(descItem);
  document.getElementById('texto-tarefa').value = '';
}

function paintBg(ent) {
  ent.classList.add('selected');
}

window.onload = function main() {
  let button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', addItenList);
  document.addEventListener('click', function (event) {
    let exporto = event.target;
    if (exporto.className === 'itemSelecionado') {
      paintBg(exporto);
    }
  })
}
