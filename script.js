
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.innerHTML = 'Minha Lista de Tarefas';
  const main = document.querySelector('main');
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  main.appendChild(header);
  document.querySelector('header').appendChild(title);
  main.appendChild(paragraph);

  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.value = '';
  input.type = 'text';
  main.appendChild(input);

  const btn1 = document.createElement('button');
  btn1.id = 'criar-tarefa';
  btn1.innerHTML = 'Adicionar';
  main.appendChild(btn1);

  const lista = document.createElement('ol');
  lista.id = 'lista-tarefas';
  main.appendChild(lista);

  const buttonClick = document.querySelector('#criar-tarefa');
  buttonClick.addEventListener('click', function () {
    let valor = document.getElementById('texto-tarefa').value;
    let item = document.createElement('li');
    item.innerText = valor;
    let list = document.querySelector('#lista-tarefas');
    list.appendChild(item);
    document.getElementById('texto-tarefa').value = '';
  })
