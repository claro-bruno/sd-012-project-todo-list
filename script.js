let Adicionar = document.getElementById('criar-tarefa');
let apagarGeralX = document.getElementById('apaga-tudo');
let aCima = document.getElementById('mover-cima');
let aBaixo = document.getElementById('mover-baixo');
let limpaComp = document.getElementById('remover-finalizados');
let salvaLis = document.getElementById('salvar-tarefas');
let removeSel = document.getElementById('remover-selecionado');
//ate aqui caapturei todos os elementos html dos botÃµes <3
let caixaInput = document.getElementById('texto-tarefa');
let ornedlist = document.getElementById('lista-tarefas');
//aqu capturei os elementos html da caixa de input e do arrey que iremos criar com ela <3

function addlist() {
  let cria = document.createElement('li')
  cria.innerHTML = caixaInput.value;
  cria.className = 'cria'
  ornedlist.appendChild(cria)

  cria.addEventListener('click', seleciona);
};

function seleciona(event) {
  removeSelect()
  event.target.classList.add("selected");
}

function removeSelect() {
  const selecionados = document.getElementsByClassName('selected');
  Object.keys(selecionados).forEach(key => {
    selecionados[key].classList.remove('selected');
  })
}

function moverCima() {
  const selecionados = document.getElementsByClassName('cria');
  let identifica = 0;

  if (selecionados.length > 1) {
    Object.keys(selecionados).forEach(element => {
      if (selecionados[element].classList.contains('selected')) {
        identifica = element
      }
    })
    removeSelect()
    if (identifica == 0) {
      selecionados[selecionados.length - 1].classList.add("selected");
    } else {
      selecionados[--identifica].classList.add("selected");
    }
  }
}
aCima.addEventListener('click', moverConteudoCima);

function moverConteudoCima() {
  let selecionados = document.getElementsByClassName('cria');
  let identifica = 0;
  let paiLista = document.getElementById('lista-tarefas');
  if (selecionados.length > 1) {
    Object.keys(selecionados).forEach(element => {
      if (selecionados[element].classList.contains('selected')) {
        identifica = element
      }
    })

    if (identifica > 0) {
      paiLista.insertBefore(selecionados[identifica], selecionados[identifica - 1])
    }
  }
}

function moverConteudoBaixo() {
  let selecionados = document.getElementsByClassName('cria');
  let identifica = 0;
  let paiLista = document.getElementById('lista-tarefas');
  if (selecionados.length > 1) {
    Object.keys(selecionados).forEach(element => {
      if (selecionados[element].classList.contains('selected')) {
        identifica = element
      }
    })

    if (parseInt(identifica) < (selecionados.length - 1)) {
      paiLista.insertBefore(selecionados[Number(identifica) + 1], selecionados[identifica])
    }
  }
}

aBaixo.addEventListener('click', moverConteudoBaixo);

function limpacaixa() {
  caixaInput.value = '';
  return caixaInput
}
Adicionar.addEventListener('click', addlist);
Adicionar.addEventListener('click', limpacaixa);
//ate aqui cimprimos do requisito 1 ao 6 com exito <3

function apagaTudo() {
  while (ornedlist.firstChild) {
    ornedlist.removeChild(ornedlist.firstChild)
  }
}
apagarGeralX.addEventListener('click', apagaTudo)
// ate oqui o cyprees não me trola 

function riscadoStyle() {
  const tarefaRiscada = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tarefaRiscada.length; index += 1) {
    if (tarefaRiscada[index].classList.contains('completed')) {
      tarefaRiscada[index].style.textDecoration = 'line-through solid black';
    } else {
      tarefaRiscada[index].style.textDecoration = '';
    }
  }
}

riscadoStyle();

function riscarTarefa() {
  ornedlist.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
    riscadoStyle();
    removeSelect();
  });
}

riscarTarefa();

const limparButton = document.querySelector('#apaga-tudo');

function limparTarefa() {
  limparButton.addEventListener('click', () => {
    const tarefasNaLista = document.querySelector('#lista-tarefas');
    while (tarefasNaLista.hasChildNodes()) {
      tarefasNaLista.removeChild(tarefasNaLista.firstChild);
    }
  });
}

limparTarefa();

const removerButton = document.querySelector('#remover-finalizados');

removerButton.addEventListener('click', () => {
  const listFinished = document.querySelectorAll('.completed');

  for (let index = 0; index < listFinished.length; index += 1) {
    listFinished[index].parentNode.removeChild(listFinished[index]);
  }
});

