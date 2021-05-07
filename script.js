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
            } 
            event.target.classList.add('selected');
        });
        createList.addEventListener('dblclick', function (event) { // Exercício 9
            event.target.classList.toggle('completed');
            // if (event.target.classList.contains('completed')) {
            //     event.target.classList.remove('completed');
            // } else {
            //     event.target.classList.add('completed');
            // }
        });

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