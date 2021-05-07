window.onload = function () {
  const addTarefa = document.getElementById('criar-tarefa');
  addTarefa.addEventListener('click', function () {
    const input = document.getElementById('texto-tarefa');
    console.log(input.value);
    const li = document.createElement('li');
    li.classList.add('itemList');
    li.className = 'tarefa';
    const ol = document.getElementById('lista-tarefas');
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value = '';
  }); 
};

document.addEventListener('click', (event) => {
  const alvo = event.target;
  if (alvo.className === 'tarefa') {
    const selected = document.querySelector('.tarefaSelecionada');
    if (selected !== null) {
      selected.classList.remove('tarefaSelecionada');
      selected.style.backgroundColor = '#245,245,211';
    }
    alvo.classList.add('tarefaSelecionada');
  }
});