/* 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
O que será verificado:

Será verificado se sua página possui uma tag header com o conteúdo Minha Lista de Tarefas */

function adicionaTitulo () {
    let header = document.createElement('header');
    document.body.appendChild(header);
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Minha Lista de Tarefas';
    header.appendChild(h1);
}
adicionaTitulo();