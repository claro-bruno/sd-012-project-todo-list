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

function updateVisit() {
  if (typeof (Storage) != "undefined") {
    if(localStorage.count !== undefined) {
      let count = parseInt(localStorage.count);
      count+=1;
      localStorage.count = count;
      document.getElementById("count").innerHTML = count;
    } else {
      localStorage.count = 1;
      document.getElementById("count").innerHTML = 1;
    }
  } else {
    document.write("Sem suporte para Web Storage");
  }  
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
  while (father.firstChild) {
    father.removeChild(father.firstChild);
  }
}

function clearEnded() {
  let clear = document.querySelectorAll(".completed");
  for (let cleaner = 0; cleaner < clear.length; cleaner += 1) {
    clear[cleaner].remove();
  }
}

function salvarLista() {
  const listaSalva = document.querySelector('ol').innerHTML
  const storage = window.localStorage;
  storage.setItem('listaSalva', listaSalva);
}

function buttonSaveMoveRemove() {
  if (typeof (Storage) != "undefined") {
    const bt1 = document.getElementById('salvar-tarefas');
    bt1.addEventListener('click', salvarLista);
    if (localStorage.getItem('listaSalva') !== 'undefined') {
      const listaSalva = document.querySelector('ol')
      const storage = window.localStorage;
      listaSalva.innerHTML = storage.getItem('listaSalva');
    }
  } else {
    document.write('Sem suporte para Web Storage');
  }
  const bt2 = document.getElementById('mover-cima');
  bt2.addEventListener('click', moveUp);
  const bt3 = document.getElementById('mover-baixo');
  bt3.addEventListener('click', moveDown);
}

window.onload = function main() {
  let bt1 = document.querySelector('#criar-tarefa');
  bt1.addEventListener('click', addItenList);
  const bt2 = document.querySelector('#apaga-tudo');
  bt2.addEventListener('click', clearList);
  const bt3 = document.querySelector('#remover-finalizados');
  bt3.addEventListener('click', clearEnded);
  buttonSaveMoveRemove();
}

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
