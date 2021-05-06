const btnCriaTarefa = document.getElementById('criar-tarefa');
btnCriaTarefa.innerHTML = 'Adiciona Tarefa';
const inputField = document.getElementById('texto-tarefa');
const ordList = document.getElementById('lista-tarefas');

function criaTarefa() {
  btnCriaTarefa.addEventListener('click', function () {
    const lista = document.createElement('li');
    lista.innerHTML = inputField.value;
    ordList.appendChild(lista);
    inputField.value = '';
    lista.addEventListener('click', changeColor);
  });
}
criaTarefa()



function changeColor(event) { 
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

