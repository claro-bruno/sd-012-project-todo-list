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

//9
//Criar um evento double click na OL
document.addEventListener('dblclick', (event) => {

//O target (item clicado) deve receber a classe completed
// event.target.classList.add('completed');

//Ao clicar duas vezes novamente ele deve retirar a classe completed (usando o toggle)
event.target.classList.toggle('completed');
});

//10
// document.addEventListener('click', (event) => {  
//   const limparTarefas = document.getElementById('apaga-tudo');
//     if(li !== '') {
//       console.log(li === '')
//     }
// });
