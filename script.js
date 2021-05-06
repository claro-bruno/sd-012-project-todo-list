window.onload = function () {
  criarTarefa();

  clicarItemLista();

  completarTarefa();

  apagarTudo();

  apagarFinalizados();
}

function criarTarefa() {
  const pegarBotaoTarefa = document.getElementById('criar-tarefa');
  const pegarInput = document.getElementById('texto-tarefa');
  const pegarLista = document.getElementById('lista-tarefas');
  pegarBotaoTarefa.addEventListener('click', function () {
    if (pegarInput.value.length === 0) {
      window.alert('Digite algo no input!');
    } else {
      let li = document.createElement('li');
      li.innerHTML = pegarInput.value;
      pegarLista.appendChild(li);
      pegarInput.value = '';
    }
  })
}

function resetarCorLista() {
  const getAllLi = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < getAllLi.length; i += 1) {
    getAllLi[i].style.removeProperty("background-color");
  }
}

function clicarItemLista() {
  const pegarLista = document.getElementById('lista-tarefas');
  pegarLista.addEventListener('click', function (event) {
    resetarCorLista();
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  })
}

function completarTarefa() {
  const pegarLista = document.getElementById('lista-tarefas');
  pegarLista.addEventListener('dblclick', function (event) {
    if (!event.target.className.includes('completed')) {
      event.target.classList.add('completed');
    } else {
      event.target.removeAttribute('class');
      //event.target.classList.remove('completed');
    }
  })
}

function apagarTudo() {
  const pegarLista = document.getElementById('lista-tarefas');
  const pegarBotaoApagarTudo = document.getElementById('apaga-tudo');
  pegarBotaoApagarTudo.addEventListener('click', function () {
    pegarLista.innerHTML = '';
  })
}

function apagarFinalizados() {
  const botaoRfinalizados = document.getElementById('remover-finalizados');
  const pegarLista = document.getElementById('lista-tarefas');
  botaoRfinalizados.addEventListener('click', function () {
    const allTask = document.querySelectorAll('#lista-tarefas li');
    for (let i = 0; i < allTask.length; i += 1) {
      if (allTask[i].className.includes('completed')) {
        pegarLista.removeChild(allTask[i]);
      }
    }
  })
}