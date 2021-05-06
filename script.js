let input = document.getElementById("texto-tarefa");
let btnCriar = document.getElementById("criar-tarefa");
let lista = document.getElementById("lista-tarefas");
let btnApagarTudo = document.getElementById("apaga-tudo");
let btnApagarFinalizados = document.getElementById("remover-finalizados");

document.addEventListener("click", function (event) {
    if (event.target == btnCriar) {
        let item = document.createElement("li");
        item.className = "item";
        item.innerText = input.value;
        input.value = "";
        lista.appendChild(item);
    }
    if (event.target == btnApagarFinalizados) {
        completos = document.getElementsByClassName("completed");

        while (completos.length > 0) {
            completos[0].remove(completos[0]);
        }
    }
    if (event.target == btnApagarTudo) {
        while (lista.firstChild) {
            lista.removeChild(lista.lastChild);
        }
    }

    if (event.target.classList.contains("item")) {
        let items = document.getElementsByClassName("item");
        for (let index = 0; index < items.length; index += 1) {
            items[index].style.backgroundColor = "white";
        }
        event.target.style.backgroundColor = "rgb(128,128,128)";
    }
})

document.addEventListener("dblclick", function (event) {
    if (event.target.classList.contains("item") && !(event.target.classList.contains("completed"))) {
        event.target.style.textDecoration = "line-through";
        event.target.classList.add("completed")
    }
    else {
        event.target.style.textDecoration = "none";
        event.target.classList.remove("completed");
    }
})