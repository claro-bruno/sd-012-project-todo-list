function adicionaLista() {
	let criaTarefa = document.getElementById('texto-tarefa').value;
	let lista = document.getElementById('lista-tarefas').innerHTML;

	lista += '<li>' + criaTarefa + '</li>';
	document.getElementById('lista-tarefas').innerHTML = lista;
	document.getElementById('texto-tarefa').value = null;
}
// feito com base https://www.youtube.com/watch?v=pRwxgtqImZQ

let alteraCor = document.getElementById('lista-tarefas');
alteraCor.addEventListener('click', mudaCor);
function mudaCor(event){
	let itemSelecionado = document.querySelectorAll('li')
	for (index = 0; index < itemSelecionado.length; index +=1){
		itemSelecionado[index].style.backgroundColor=""
	}
 event.target.style.backgroundColor="rgb(128, 128, 128)";
}
