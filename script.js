const headerContent = document.querySelector('#header-content');

function createHeaderContent() {
  headerContent.innerHTML = 'Minha Lista de Tarefas';
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  headerContent.appendChild(paragraph);
}
createHeaderContent();
