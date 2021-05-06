window.onload = function () {

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
  main.appendChild(input);

  const lista = document.createElement('ol');
  lista.id = 'lista-tarefas';
  main.appendChild(lista);
}