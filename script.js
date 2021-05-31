function testNumItemRemov(removDown, removUp) {
  if (removDown.length > 0) {
    removDown[0].classList.remove('down');
  }
  if (removUp.length > 0) {
    removUp[0].classList.remove('up');
  }
}

function adicionaUpDown(ent, itens) {
  for (let Il = 0; Il < itens.length; Il += 1) {
    if (itens[Il] === ent) {
      itens[Il - 1].classList.add('up');
      itens[Il + 1].classList.add('down');
    }
  }
}

function testNumItemAdd(itens, ent) {
  if (itens.length !== 1) {
    if (itens[0] === ent) {
      itens[1].classList.add('down');
    } else if (itens[itens.length - 1] === ent) {
      itens[itens.length - 2].classList.add('up');
    } else {
      adicionaUpDown(ent, itens);
    }
  }
}

function upAndDown(removDown, removUp, itens, ent) {
  testNumItemRemov(removDown, removUp);
  testNumItemAdd(itens, ent);
}

function testeAndPaintBg(ent) {
  const removSe = document.getElementsByClassName('selected');
  const removUp = document.getElementsByClassName('up');
  const removDown = document.getElementsByClassName('down');
  const itens = document.getElementsByClassName('itemSelecionado');
  upAndDown(removDown, removUp, itens, ent);
  if (removSe.length !== 0) {
    removSe[0].classList.remove('selected');
  }
  ent.classList.add('selected');
}

function checkUnCheck(check) {
  if (check.classList[1] === 'completed') {
    check.classList.remove('completed');
  } else {
    check.classList.add('completed');
  }
}

function addItenList() {
  const desc = document.getElementById('texto-tarefa').value;
  if (desc === '') {
    return null;
  }
  const item = document.createElement('li');
  const lista = document.getElementById('lista-tarefas');
  item.innerHTML = desc;
  item.className = 'itemSelecionado';
  lista.appendChild(item);
  item.addEventListener('click', () => {
    testeAndPaintBg(item);
  });
  item.addEventListener('dblclick', () => {
    checkUnCheck(item);
  });
  document.getElementById('texto-tarefa').value = '';
}

function clearList() {
  const father = document.getElementById('lista-tarefas');
  while (father.firstChild) {
    father.removeChild(father.firstChild);
  }
}

function clearEnded() {
  const clear = document.querySelectorAll('.completed');
  for (let cleaner = 0; cleaner < clear.length; cleaner += 1) {
    clear[cleaner].remove();
  }
}

function salvarLista() {
  const listaSalva = document.querySelector('ol').innerHTML;
  const storage = window.localStorage;
  storage.setItem('listaSalva', listaSalva);
}

function moveUp() {
  const element = document.getElementsByClassName('up');
  if (element.length <= 0) {
    return null;
  }
  const aux = document.getElementsByClassName('up')[0].innerHTML;
  const select = document.getElementsByClassName('selected')[0];
  const up = document.getElementsByClassName('up')[0];
  up.innerHTML = select.innerHTML;
  select.innerHTML = aux;
  testeAndPaintBg(up);
}

function moveDown() {
  const element = document.getElementsByClassName('down');
  if (element.length <= 0) {
    return null;
  }
  const aux = document.getElementsByClassName('down')[0].innerHTML;
  const select = document.getElementsByClassName('selected')[0];
  const up = document.getElementsByClassName('down')[0];
  up.innerHTML = select.innerHTML;
  select.innerHTML = aux;
  testeAndPaintBg(up);
}

const removeSeleceted = () => {
  const seleceted = document.querySelector('.selected ');
  seleceted.remove();
};

const movAndRemove = () => {
  const bt2 = document.getElementById('mover-cima');
  bt2.addEventListener('click', (Event) => {
    Event.preventDefault();
    moveUp();
  });
  const bt3 = document.getElementById('mover-baixo');
  bt3.addEventListener('click', (Event) => {
    moveDown();
    Event.preventDefault();
  });
  const bt4 = document.getElementById('remover-selecionado');
  bt4.addEventListener('click', removeSeleceted);
};

function buttonSaveMoveRemove() {
  if (localStorage.getItem('listaSalva') !== 'undefined') {
    const listaSalva = document.querySelector('ol');
    const storage = window.localStorage;
    listaSalva.innerHTML = storage.getItem('listaSalva');
    const itenSavos = document.querySelectorAll('.itemSelecionado');
    for (let itenlist = 0; itenlist < itenSavos.length; itenlist += 1) {
      itenSavos[itenlist].addEventListener('click', (Event) => {
        testeAndPaintBg(Event.target);
      });
      itenSavos[itenlist].addEventListener('dblclick', (Event) => {
        checkUnCheck(Event.target);
      });
    }
  }
  movAndRemove();
}

window.onload = function main() {
  const bt1 = document.querySelector('#criar-tarefa');
  bt1.addEventListener('click', addItenList);
  const bt2 = document.querySelector('#apaga-tudo');
  bt2.addEventListener('click', clearList);
  const bt3 = document.querySelector('#remover-finalizados');
  bt3.addEventListener('click', clearEnded);
  if (typeof (Storage) !== 'undefined') {
    const bt4 = document.getElementById('salvar-tarefas');
    bt4.addEventListener('click', salvarLista);
    buttonSaveMoveRemove();
  }
};
