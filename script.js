let botao = document.getElementsByTagName('button')[0];
botao.innerHTML = 'Criar tarefa';

//================================================================================

//Exercício 5:

let inputSelect = document.getElementById('texto-tarefa');
let selectOl = document.getElementById('lista-tarefas');


function capturar () {
    botao.addEventListener('click', function (event) {
        let criarLista = document.createElement('li');
        let valorCapturado = inputSelect.value;
        criarLista.innerHTML = valorCapturado;
        selectOl.appendChild(criarLista);


        function clearInput () {
            if(inputSelect.value !== '') {
                inputSelect.value = '';
            }
        }
        clearInput ();   
    })
     
}

capturar ();