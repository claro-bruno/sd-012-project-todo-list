//window.load = function() {
    //const cabeçalho = document.querySelector//('#titulo');
    //const title = document.createElement('h1');
    //cabeçalho.appendChild(title);
    //title.innerText = 'Minha Lista de Tarefas';
 
    //const lista = document.createElement('ol');
    //const section = document.getElementsByTagName//(section);
    //section.appendChild(lista);

const botao = document.querySelector('#criar-tarefa');
        botao.addEventListener('click', addTarefa);
        
        function addTarefa() {
            const input = document.querySelector('#texto-tarefa');
            const lista = document.querySelector('#lista-tarefas');
            let item = document.createElement('li');           
            lista.appendChild(item);
            item.innerText = input.value;
            input.value = "";
            
        }
//    }