//CRIA CONST PARA RESGATAR O BOTAO PELO ID:
const addTask = document.getElementById('criar-tarefa');

//CRIA CONST PARA RESGATAR A LISTA ORDENADA PELO ID:
const taskList = document.getElementById('lista-tarefas');

//CRIA CONST PARA RESGATAR A TAG INPUT PELO ID:
const taskText = document.getElementById('texto-tarefa');

//CRIA CONST QUE RESGATA A TAG DO BOTAO DE LIMPAR A LISTA:
const taskCleaner = document.getElementById('apaga-tudo');

const clearDoneTasks = document.getElementById('remover-finalizados');

//5, 6 - CRIANDO A FUNÇÃO DE ADD A TASK E CRIAR UMA TAG li PARA ADICIONAR A ol: Usei o listener pra criar o click e atribui a função. Criei a const que cria uma tag li para ser adiciona a lista ordenada. Atribui o valor da task (que sera colocada na lista li) resgatado do input, usando taskText.value, ou seja, ele pega o valor que foi dado ao elemento com a id taskText. Coloquei a li (task) como filha da ol com id taskList. Por fim atrivui o valor de taskText a uma string vazia, pois é o estado inicial dela antes de ser preenchido meu input

addTask.addEventListener('click', () => {
    const task = document.createElement('li');
    task.innerHTML = taskText.value;
    taskList.appendChild(task);
    taskText.value = '';
})


//7 - CRIEI A FUNÇÃO PRA EXECUTAR A LOGICA. ADICIONEI UM EVENT LISTENER COM CLICK E UM EVENT. DECLAREI A CONST PRA SELECIONAR O ALVO DO EVENTO. CRIEI A CONST PRA RESGATAR A CLASSE GRAY QUE É DA COR DE FUNDO QUE TEM QUE COLOCAR PELO CSS. CRIEI UM IF: SE A TASK ESTIVER SELECIONADA REMOVE A COR CINZA SETADA NO CSS, SENAO ADICIONA A COR CINZA DO CSS (ISSO TUDO COM O EVENT CLICK NO ALVO)

function taskSelect () {
    taskList.addEventListener('click', (event) => {
        const eventTarget = event.target;
        const selectedTask = document.querySelector('.gray');
        if (selectedTask) {
            selectedTask.classList.remove('gray');
        }
        else {
            eventTarget.classList.add('gray');
        }
    })
}

taskSelect();

//8 - 



//9 - CRIEIE A FUNCTION PARA EXECUTAR A LOGICA DO REQUISITO. CRIEI UM EVENT LISTENER COM DOUBLE CLICK E UM EVENTO PARA ACONTECER. DENTRO CRIEI A CONST PARA RESGATAR O EVENTO, O ALVO, E A LISTA DE CLASSES. POR FIM CRIEI O IF, SE dcTask CONTER A CLASSE COMPLETED, ELE REMOVE A MESMA, SENAO, ELE ADICIONA. ISSO TUDO CONDICIONADO AO EVENTO DOUBLE CLICK.

function taskComplete () {
    taskList.addEventListener('dblclick', (event) => {
        const dcTask = event.target.classList;
        if (dcTask.contains('completed')) {
            dcTask.remove('completed');
        }
        else {
            dcTask.add('completed');
        }
    })
}

taskComplete();

//10 - CRIEI A FUNCTION QUE EXECUTA A LOGICA. COM A CONST QUE RESGATA O ELEMENTO COM A ID apaga-tudo CRIEI UM EVENT LISTENER DE CLICAR NO BOTAO, E DENTRO DELE CHAMEI A CONST TASKLIST.INNERHTML=''; PARA RETORNAR UMA STRING VAZIA QUANDO CLICAR NO BOTAO.

function taskClear () {
    taskCleaner.addEventListener('click', () => {
        taskList.innerHTML = '';
    })
}

taskClear();

//11 - PRIMEIRO CRIEI A CONST PRA RESGATAR O ELEMENTO COM A CLASSE completed QUE SAO AS TASKS RISCADAS (FINALIZADAS). DEPOIS CRIEI A FUNÇÃO, DENTRO DELA USEI A CONST QUE RESGATA O BOTAO QUE TEM O ID remover-finalizados CHAMANDO UM EVENT LISTENER COM UM BOTAO DE CLIK QUE CONTEM UM FOR. O FOR INICIA NA ULTIMA POSIÇÃO DOS ELEMENTOS FINALIZADOS (finished.length-1) VAI ATÉ O INDEX SER MAIOR OU IGUAL A 0 E DECREMENTA DE UM EM UM. EM SEGUIDA DENTRO DO FOR EU REMOVO OS ITENS QUE FORAM PERCORRIDOS NO FOR SE A CONDIÇÃO EXISTIR. CLARO, TUDO ISSO SE FOR CLICADO NO BOTAO "REMOVA FINALIZADOS".

const finished = document.getElementsByClassName('completed');
function taskDoneCleaner () {
    clearDoneTasks.addEventListener('click', () => {
        for (let index = finished.length -1; index >= 0; index -= 1) {
            finished[index].remove();
        }

    })

}

taskDoneCleaner();
    