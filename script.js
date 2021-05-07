const botao = document.querySelector('#criar-tarefa');
const botaoLimpa = document.querySelector('#apaga-tudo');
const botaoLimpaCompletos = document.querySelector('#remover-finalizados');
const li = document.querySelectorAll('ol');
const lis = document.getElementsByTagName('li');

function adicionarTarefa() {
  const caixaTexto = document.querySelector('#texto-tarefa');
  const lista = document.getElementById('lista-tarefas');
  const criarLi = document.createElement('li');
  criarLi.textContent = caixaTexto.value;
  criarLi.className = 'tasks';
  lista.appendChild(criarLi);
  caixaTexto.value = '';
}

botao.addEventListener('click', adicionarTarefa);

for (let i = 0; i < li.length; i += 1) {
  li[i].addEventListener('click', function (event) {
    if (event.target.className === 'tasks') {
      if (document.querySelector('#corSelecionada') !== null) {
        document.querySelector('#corSelecionada').removeAttribute('id');
      }
      event.target.id = 'corSelecionada';
    }
  });
}

for (let c = 0; c < li.length; c += 1) {
  li[c].addEventListener('dblclick', function (event) {
    if (event.target.className === 'tasks') {
      event.target.className = 'tasks completed';
    } else if (event.target.className === 'tasks completed') {
      event.target.className = 'tasks';
    }
  });
}

botaoLimpa.addEventListener('click', function () {
  document.querySelector('#lista-tarefas').innerHTML = '';
});

botaoLimpaCompletos.addEventListener('click', function () {
  const riscados = document.getElementsByClassName('completed');
  for (let i = riscados.length - 1; i >= 0; i -= 1) {
    riscados[i].remove();
  }
});
