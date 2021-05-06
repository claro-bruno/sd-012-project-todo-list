window.onload = function () {
    let header = document.createElement('header');
    let title = document.createElement('h1');
    title.innerHTML = 'Minha Lista de Tarefas'
    let main = document.querySelector('main');
    main.appendChild(header);
    document.querySelector('header').appendChild(title)
    
}