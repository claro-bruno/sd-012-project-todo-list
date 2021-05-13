const olList = document.querySelector('#lista-tarefas');
const btnTask = document.getElementById('criar-tarefa');
const input = document.querySelector('#texto-tarefa');

function listTask() {
  btnTask.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.classList.add('task');
    olList.appendChild(newItem);
    newItem.innerHTML = input.value;
    input.value = '';
  });
}
listTask();

function paintBg() {
  const selectList = document.querySelectorAll('.task');
  for (let index = 0; index < selectList.length; index += 1) {
    if (selectList[index].classList.contains('selected')) {
      selectList[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      selectList[index].style.backgroundColor = 'white';
    }
  }
}

olList.addEventListener('click', (event) => {
  const targetList = event.target;
  const selectList = document.querySelector('.selected');
  if (selectList !== null) {
    selectList.classList.remove('selected');
    targetList.classList.add('selected');
  } else {
    targetList.classList.add('selected');
  }
  paintBg();
});



/*
 1 - capturar o elemento que tem a classe task em forma de array com selectAll.
 2 - if a classe selected estiver adicionada pinte de vermelho se não tiver pinte de branco.
*/

/*
1 - Capturar o elemento que tem a classe select. OK
2 - Fazer if que vai avaliar se o elemento com classe select já existem.
2.1 - se o nosso elemento com a classe select já existem então remova a classe select dele e adiciona ao nosso elemento clicado.
2.2 - se o elemento não existe apenas adiciona a classe select ao nosso elemento clicado.
*/

/*
  1 - Colocar um escutador de eventos no click. (ol) OK
  2 - Alterar a cor do item. (event).target OK
  3 - Não ter estilo CSS ao carregar á Pagina.
  3 - Criar uma classe para o nosso item clicado.
  4 - No click da list passa a ter o estilo em CSS.
*/