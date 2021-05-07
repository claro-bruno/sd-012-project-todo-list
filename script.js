function addItenList() {
  let desc = document.getElementById('texto-tarefa').value;
  if (desc === '') {
    return null;
  }
  let item = document.createElement('li');
  let lista = document.getElementById('lista-tarefas');
  item.innerHTML = desc;
  item.className = 'itemSelecionado'
  lista.appendChild(item);
  document.getElementById('texto-tarefa').value = '';
  console.log(item)
}

function testeAndPaintBg(ent) {
  let remov = document.getElementsByClassName('selected');
  if (remov.length !== 0) {
    remov[0].classList.remove('selected');
  } 
    ent.classList.add('selected');
}

function checkUnCheck(check) {
  if (check.classList[2] === 'completed') {
    check.classList.remove('completed');
  } else {
    check.classList.add('completed');
  }
}

window.onload = function main() {
  let button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', addItenList);
  document.addEventListener('click', function (event) {
    let exporto = event.target;
    if (exporto.className === 'itemSelecionado') {
      testeAndPaintBg(exporto);
    }
  });
  document.addEventListener('dblclick', function (event){
    let work = event.target;
    if (work.classList[0] === 'itemSelecionado') {
      checkUnCheck(work);
    }
  });
}
