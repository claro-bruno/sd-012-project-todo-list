const textoTarefa = document.querySelector('#texto-tarefa');
let texto = '';
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');

function tarefas() {
    const itemLista = document.createElement('li');
    itemLista.classList.add('itemDaLista');
    texto = textoTarefa.value;
    itemLista.innerHTML = texto;
    if (texto != '') {
        listaTarefa.appendChild(itemLista);
        textoTarefa.value = '';
    } else {
        alert('Insira uma tarefa');
    }
}
criarTarefa.addEventListener('click', tarefas);
