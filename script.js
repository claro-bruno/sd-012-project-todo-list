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
        let todosItens = document.getElementsByClassName("item");
        console.log(todosItens);
        for (let index = 0; index < todosItens.length; index += 1) {
          todosItens[index].style.backgroundColor = "";
        }
        mudaCor.target.style.backgroundColor = "gray";
    }
  });
}

adicionar();
corCinza();