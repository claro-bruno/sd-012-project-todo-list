window.onload = function () {
  const addTarefa = document.getElementById('criar-tarefa');
  addTarefa.addEventListener('click', (event) => {
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

function riskList() {
  document.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
riskList();

//10
// document.addEventListener('click', (event) => {  
//   const limparTarefas = document.getElementById('apaga-tudo');
//     if(li !== '') {
//       console.log(li === '')
//     }
// });
