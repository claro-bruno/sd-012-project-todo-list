const btnCriaTarefa = document.getElementById('criar-tarefa');
btnCriaTarefa.innerHTML = 'Adiciona Tarefa';
const inputField = document.getElementById('texto-tarefa');
const ordList = document.getElementById('lista-tarefas');

btnCriaTarefa.addEventListener('click', () => {
  const lista = document.createElement('li');
  lista.innerHTML = inputField.value;
  ordList.appendChild(lista);
  inputField.value = '';
  apagaTudo();
});

function changeColor(event) {
  if (document.querySelector('.corCinza') === null) {
    event.target.classList.add('corCinza');
    document.querySelector('.corCinza').style.backgroundColor = 'rgb(128, 128, 128)';
  }
  else {
    document.querySelector('.corCinza').style.backgroundColor = 'white';
    document.querySelector('.corCinza').classList.remove('corCinza');
    event.target.classList.add('corCinza');
    document.querySelector('.corCinza').style.backgroundColor = 'rgb(128, 128, 128)';    
  }
}

ordList.addEventListener('click', changeColor);

function taskEnd(event) {
  if (event.target.classList.contains('completed') === false) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}
ordList.addEventListener('dblclick', taskEnd);

const btnApaga = document.querySelector('#apaga-tudo');
btnApaga.innerHTML = 'Apagar todos';

function apagaTudo() {
  const lista = document.querySelectorAll('li');
  for (let index = 0; index <= lista.length; index += 1) {
    const listaFilhos = ordList.childNodes[index];
    btnApaga.addEventListener('click', () => {
      listaFilhos.remove();
    });
  }
}

const btnApagaFinalizados = document.querySelector('#remover-finalizados');
btnApagaFinalizados.innerHTML = 'Apagar Selecionados';

function apagaFinalizados() {
  const marcadosCinza = document.querySelectorAll('.completed');
  for (index = 0; index < marcadosCinza.length; index += 1) {
    ordList.removeChild(marcadosCinza[index]);
  }
}

btnApagaFinalizados.addEventListener('click', apagaFinalizados);
