
const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', addTarefa);

function addTarefa() {
    const input = document.querySelector('#texto-tarefa');
    const lista = document.querySelector('#lista-tarefas');
    let item = document.createElement('li');
    item.addEventListener('dblclick', function(event) {
        event.target.classList.toggle('completed');
    });

    item.className = 'tarefa';  
    lista.appendChild(item);
    item.innerText = input.value;
    input.value = "";     
    const itens = document.querySelectorAll('.tarefa');
    for (let i = 0; i < itens.length; i += 1) {
        itens[i].addEventListener('click', addCinza);
        
        function addCinza() {
            const select = document.querySelector('.select');
            if (select) {
                select.classList.remove('select');
            }
            itens[i].className += ' select';
        }
        
    }
}
const limpar = document.querySelector('#apaga-tudo');
limpar.addEventListener('click', apagaTudo); 
function apagaTudo() {
    const lista = document.querySelector('#lista-tarefas'); 
    lista.innerHTML = '';
}     

const remover = document.querySelector('#remover-finalizados');
remover.addEventListener('click', removerFinalizadas) 
function removerFinalizadas() {
    const feito = document.querySelectorAll('.completed');
    for (let i = 0; i < feito.length; i += 1) {
        const lista = document.querySelector('#lista-tarefas');
        lista.removeChild(feito[i]);
    } 
}    



