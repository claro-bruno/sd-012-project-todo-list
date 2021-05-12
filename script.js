let botao = document.getElementsByTagName('button')[0];
botao.innerHTML = 'Criar tarefa';

//================================================================================

//Exercício 5 e 6:

let inputSelect = document.getElementById('texto-tarefa');
let selectOl = document.getElementById('lista-tarefas');
let selectClear = document.getElementById('apaga-tudo');
let selectRemove = document.getElementById('remover-finalizados');

function capturar () {
    botao.addEventListener('click', function (event) {
        let createList = document.createElement('li');
        createList.addEventListener('click', function(event) { // Exercício 7 e 8
            let selectSelected = document.querySelector('.selected');
            if (selectSelected) {
                selectSelected.classList.remove('selected');
            } 
            event.target.classList.add('selected');
        });
    createList.addEventListener('dblclick', function (event) { // Exercício 9
        event.target.classList.toggle('completed'); // função toggle ai adicionar a classe caso ela não exista e tirar caso exista
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

 //Exercício 10:

 function clear () {
     document.addEventListener('click', function (event) {
         if(event.target.id === 'apaga-tudo') {
             while (selectOl.firstElementChild)
             selectOl.removeChild(selectOl.firstElementChild)
         }
     })
 }

 clear ();

  //Exercício 11:

function clearCompleted () {
    let buttonSelect = document.getElementById('remover-finalizados');
    buttonSelect.addEventListener('click', (event) => {
        let listContent = document.querySelectorAll('.completed');
        for(index = 0; index < listContent.length; index += 1) {
            console.log(listContent[index]);
            selectOl.removeChild(listContent[index]);
        }
    }) 
}
clearCompleted ();