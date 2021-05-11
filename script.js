let section = document.querySelector('#tarefas')

function lista() {
    let list = document.createElement('ol');
    list.id = 'lista-tarefas';
    section.appendChild(list);
}
lista()