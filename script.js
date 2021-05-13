/* Function Title creates <h1> Title based on the string
used as parameter */
function title(string) {
    let title = document.querySelector('h1');
    title.innerHTML = string;
}
title('Minha Lista de Tarefas');

/* Function instructionText creates <p> text based on the string
used as parameter */
function instructionText(string) {
    let instructions = document.getElementById('funcionamento');
    instructions.innerHTML = string;
}
instructionText('Clique duas vezes em um item para marcá-lo como completo');

/* Function newTasks creates a <li> with the content from input box. If
input.value = '' it alerts the user to fill the input and stops the function. */
function newTasks() {
    let button = document.querySelector('#criar-tarefa');
    let input = document.querySelector('#texto-tarefa');
    let list = document.querySelector('#lista-tarefas');

    button.addEventListener('click', function(){
        if (input.value === ""){
            alert('Preencha qual atividade deseja adicionar.');
        } else {
            let listItem = document.createElement('li')
            listItem.innerHTML = input.value;
            listItem.className = 'list-Item';
            listItem.addEventListener('dblclick', completeTask);
            listItem.addEventListener('click', changeColor);
            list.appendChild(listItem);
            input.value = "";
        }
    })
}
newTasks();

/* Function chanceColor changes <li> backgroundColor highlighting the clicked line */
function changeColor(event) {
    const selected = document.querySelector('.selected');

    if (selected === null) {
        event.target.classList.add ('selected');
    } if (selected !== null) {
        selected.classList.remove('selected');
        event.target.classList.add ('selected');
    }
}

/* Function completeTask makes a line-through the tasks text assigning it as complete */
function completeTask(event) {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
}

/* Function clearList deletes all <ul> child nodes cleaning the task list */
function clearList() {
    const buttonClear = document.querySelector('#apaga-tudo');
    const list = document.querySelector('#lista-tarefas');
    const itemList = document.getElementsByTagName('li');

    buttonClear.addEventListener('click', function() {
        if (itemList.length > 0) {
            while(list.firstChild) {
                list.removeChild(list.firstChild);
            }
        } else {
            alert ('A lista está vazia!');
        }
    })
}
clearList();

/* Function clearCompleted deles all <li> item marked as completed through the class 'completed */
function clearCompleted() {
    const completed = document.getElementsByClassName('completed');
    const buttonClearComleted = document.querySelector('#remover-finalizados');

    buttonClearComleted.addEventListener('click', function() {
        while (completed.length > 0) {
            completed[0].parentNode.removeChild(completed[0]);
        }
    })
}
clearCompleted();

/* Function saveTask saves the innerHTML from <ol> on localStorage */
function saveTask() {
    const buttonSaveTask = document.querySelector('#salvar-tarefas');
    const list = document.getElementById('lista-tarefas');
    
    buttonSaveTask.addEventListener('click', function() {
        console.log(list.innerHTML);
        localStorage.setItem('task', list.innerHTML);
        

            alert('Tarefas salvas');      
    })
}
saveTask();

/* Function recoverTask recovers the <ol> information saved on localStorage */
function recoverTask() {
    let listItem = localStorage.getItem('task');
    let list = document.querySelector('#lista-tarefas');


    if (localStorage.length > 0) {
        list.innerHTML = listItem;
        let listagem = document.querySelectorAll('li');

        for (let index = 0; index < listagem.length; index += 1) {
            listagem[index].addEventListener('dblclick', completeTask);
            listagem[index].addEventListener('click', changeColor);
        }
    }
}
recoverTask();

/* Function moveUP moves up the <li> position based on the class selected*/
function moveUp() {
    const moveUpButton = document.querySelector('#mover-cima');
    
    moveUpButton.addEventListener('click', function() {
        
        const selected = document.querySelector('.selected');
        if (selected === null) {
            return
        }
        const prevSibling = selected.previousElementSibling;

        if (selected === null) {
            return
        }

        if (prevSibling === null) {
            alert('Voce chegou ao topo da lista')
        }
        if (prevSibling) {
            selected.parentNode.insertBefore(selected, prevSibling);
        }
    })
}
moveUp();

/* Function moveUP moves down the <li> position based on the class selected*/
function moveDown() {
    const moveDownButton = document.querySelector('#mover-baixo');

    moveDownButton.addEventListener('click', function() {
        const selected = document.querySelector('.selected');
        if (selected === null) {
            return
        }
        const nexSibling = selected.nextElementSibling;

        if (nexSibling === null) {
            alert('Voce chegou ao fim da lista')
        }
        if (nexSibling !== null) {
            selected.parentNode.insertBefore(nexSibling, selected);
        }

    })
}
moveDown();