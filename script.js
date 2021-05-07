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

const li = document.querySelector('#lista-tarefas');
const item = document.getElementsByTagName('li')
function mudaCor (evento) {
    for(let itemX; itemX < item.length; itemX += 1) {
        item[itemX].classList.remove('mudandoCor');
    } 
    evento.target.classList.add('mudandoCor')
}
li.addEventListener('click', mudaCor);
