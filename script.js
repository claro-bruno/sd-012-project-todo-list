
const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', addTarefa);
        
function addTarefa() {
    const input = document.querySelector('#texto-tarefa');
    const lista = document.querySelector('#lista-tarefas');
    let item = document.createElement('li');
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
    for (let i = 0; i < itens.length; i += 1) {
        itens[i].addEventListener('dblclick', riscaTarefa);
        function riscaTarefa() {
            itens[i].classList.toggle('completed');
        }
    }
    const limpar = document.querySelector('#apaga-tudo');
    limpar.addEventListener('click', apagaTudo); 
    function apagaTudo() {
        const lista = document.querySelector('#lista-tarefas'); 
        lista.innerHTML = '';
        }
}

