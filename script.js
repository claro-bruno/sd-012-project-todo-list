let botao = document.getElementsByTagName('button')[0];
botao.innerHTML = 'Criar tarefa';

//================================================================================

//Exercício 5 e 6:

let inputSelect = document.getElementById('texto-tarefa');
let selectOl = document.getElementById('lista-tarefas');


function capturar () {
    botao.addEventListener('click', function (event) {
        let criarLista = document.createElement('li');
        criarLista.addEventListener('click', function() {
            criarLista.style.backgroundColor = 'rgb(128, 128, 128)'
        })
        let valorCapturado = inputSelect.value;
        criarLista.innerHTML = valorCapturado;
        selectOl.appendChild(criarLista);


        function clearInput () { // Exercício 6
            if(inputSelect.value !== '') {
                inputSelect.value = '';
            };
        };
        clearInput ();
    });
     
};

capturar ();

//================================================================================

//Exercício 7

