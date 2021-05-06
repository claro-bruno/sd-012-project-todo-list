let input = document.getElementById("texto-tarefa");
let btn = document.getElementById("criar-tarefa");
let lista = document.getElementById("lista-tarefas");

document.addEventListener("click", function (event) {
    if (event.target == btn) {
        let item = document.createElement("li");
        item.innerText = input.value;
        input.value = "";
        lista.appendChild(item);
    }
})