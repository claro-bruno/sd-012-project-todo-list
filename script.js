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
  const item = event.target;
  const tarefaSelecionada = document.querySelector('.tarefaSelecionada');
  if (item.className === 'tarefa') {
    if (tarefaSelecionada !== null) {
      tarefaSelecionada.classList.remove('tarefaSelecionada');
      tarefaSelecionada.style.backgroundColor = '#245,245,211';
    }
    item.classList.add('tarefaSelecionada');
  }
});