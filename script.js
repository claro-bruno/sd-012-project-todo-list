function adicionar() {
  document.addEventListener("click", function(btnAdicionar) {
    if (btnAdicionar.target.id === "criar-tarefa") {
        let lista = document.getElementById("lista-tarefas");
        let novaTarefa = document.createElement("li");
        let textoTarefa = document.getElementById("texto-tarefa");
        let tarefaValor = textoTarefa.value;
        novaTarefa.className = "item";
        novaTarefa.innerText = tarefaValor;
        lista.appendChild(novaTarefa);
        textoTarefa.value = "";
    }
  });
}

function corCinza() {
  document.addEventListener("click", function(mudaCor) {
    if (mudaCor.target.className === "item") {
        mudaCor.target.style.backgroundColor = "gray";
    }
  });
}


adicionar();
corCinza();