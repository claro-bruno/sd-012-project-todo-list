window.onload = function () {
    let header = document.createElement('header');
    let title = document.createElement('h1');
    title.innerHTML = 'Minha Lista de Tarefas'
    let main = document.querySelector('main');
    let paragraph = document.createElement('p');
    paragraph.id = 'funcionamento';
    paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
    main.appendChild(header);
    document.querySelector('header').appendChild(title);
    main.appendChild(paragraph);
}