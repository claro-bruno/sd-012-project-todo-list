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
  event.target.style.backgroundColor= "rgb(128, 128, 128)";
}

alteraCor.addEventListener("dblclick", riscaItem);
function riscaItem(event){
		if(event.target.className === "completed"){
		event.target.className = ""
	} else{
		event.target.className = "completed"
	}
}

let limparLista = document.getElementById('apaga-tudo');
limparLista.addEventListener('click', removeTudo);
function removeTudo(){
	let apagaTudo = document.querySelectorAll('li')
	if (apagaTudo.length > 0){
		for(index = 0; index < apagaTudo.length; index +=1){
			apagaTudo[index].remove();
			}
	}
}

let removeFinalizado = document.getElementById('remover-finalizados');
removeFinalizado.addEventListener('click', removeRiscado);
function removeRiscado(){
	let tarefasCompletas = document.querySelectorAll('.completed')
	console.log (tarefasCompletas)
	if (tarefasCompletas.length > 0){
		for(index = 0; index < tarefasCompletas.length; index +=1){
			tarefasCompletas[index].remove()
			}
	}
}

let removeSelecionado = document.getElementById('remover-selecionado');
removeSelecionado.addEventListener('click', retiraSelecionado);
function retiraSelecionado(){
	let defineItem = document.querySelectorAll('li')
	for(index = 0; index < defineItem.length; index +=1){
		if (defineItem[index].style.backgroundColor === "rgb(128, 128, 128)"){
		defineItem[index].remove();
		}
	}
}

let salvaTarefas = document.getElementById('salvar-tarefas');
	salvaTarefas.addEventListener('click', salvaItens);
	function salvaItens(){
		let itens =  document.getElementById('lista-tarefas').innerHTML
		localStorage.setItem("xablau", itens)
}
		let resultado = localStorage.getItem("xablau")
		document.getElementById("lista-tarefas").innerHTML = resultado
		

