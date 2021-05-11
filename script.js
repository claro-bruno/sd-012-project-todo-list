let button = document.getElementById('criar-tarefa');  

button.addEventListener('click', () => {
    
    let itemDaLista = document.createElement('li');
    const inputTextoTarefa = document.querySelector('#texto-tarefa');
    const ListaTarefas = document.querySelector('#lista-tarefas');
    if(inputTextoTarefa.value !== '') {
        itemDaLista.className = 'blankSpace';
        ListaTarefas.appendChild(itemDaLista) 
        itemDaLista.innerText = inputTextoTarefa.value;
        inputTextoTarefa.value = '';
                
    } else {
        alert('Digite um valor');
    } 
    
    itemDaLista.addEventListener('click', (event) => {
        let emBranco = document.querySelectorAll('.blankSpace');
            for (let indice = 0; indice < emBranco.length; indice += 1) {
                emBranco[indice].classList.remove('selected');
            };
        event.target.classList.add('selected');
   
    }) 

    itemDaLista.addEventListener('dblclick', (event) => {
       event.target.classList.add('completed');
       itemDaLista.addEventListener('dblclick', (event) => {
        event.target.classList.remove('completed');
    
       })   
   
    })   

})


