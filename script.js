let botao = document.getElementsByTagName('button')[0];
botao.innerHTML = 'Criar tarefa';

//================================================================================

//Exercício 5 e 6:

let inputSelect = document.getElementById('texto-tarefa');
let selectOl = document.getElementById('lista-tarefas');


function capturar () {
    botao.addEventListener('click', function (event) {
        let createList = document.createElement('li');
        createList.addEventListener('click', function(event) { // Exercício 7 e 8
            let teste = document.querySelector('.selected');
            if (teste) {
                teste.classList.remove('selected');
                teste.style.backgroundColor = '';
            } 
            event.target.classList.add('selected');
            event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        });
        createList.addEventListener('dblclick', function (event) {
            let doubleClicke = document.querySelector('.completed');
            if (doubleClicke) {
                doubleClicke.remove('completed');
            }
            event.target.classList.add('completed');
        })

        let valorCapturado = inputSelect.value;
        createList.innerHTML = valorCapturado;
        selectOl.appendChild(createList);


        function clearInput () { // Exercício 6
            if(inputSelect.value !== '') {
                inputSelect.value = '';
            };
        };
        clearInput ();
    });
     
};

capturar ();