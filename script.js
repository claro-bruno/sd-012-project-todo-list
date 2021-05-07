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

function clearList() {
  let father = document.getElementById('lista-tarefas');
  console.log(father)
 // while (father.firstChild) {
 //   father.removeChild(father.firstChild);
//}
}

function clearEnded() {
  let clear = document.querySelectorAll(".completed");
  for (let cleaner = 0; cleaner < clear.length; cleaner += 1) {
    clear[cleaner].remove();
  }
}

window.onload = function main() {
  let bt1 = document.querySelector('#criar-tarefa');
  bt1.addEventListener('click', addItenList);
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
  let bt2 = document.querySelector('#apaga-tudo')
  bt2.addEventListener('click', clearList)
  let bt3 = document.querySelector('#remover-finalizados')
  bt3.addEventListener('click', clearEnded)
}
