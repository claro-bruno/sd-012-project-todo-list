window.onload = function () {
  const addTarefa = document.getElementById('criar-tarefa');
  addTarefa.addEventListener('click', function () {
    const input = document.getElementById('texto-tarefa');
    console.log(input.value);
    const li = document.createElement('li');
    li.classList.add('itemList');
    const ol = document.getElementById('lista-tarefas');
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value = '';
  });
};
