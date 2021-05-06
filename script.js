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

            // createList.classList.add('selected');
            // event.target.style.backgroundColor = 'rgb(128, 128, 128)';
            // if(createList.classList.contains('selected')) {
            //     event.target.classList.remove('selected');
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