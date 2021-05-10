
var lista = document.querySelector("#lista-tarefas");
var botao = document.querySelector("#criar-tarefa");
var input = document.querySelector("#texto-tarefa");

botao.addEventListener("click", function(){
    let texto = input.value;
    let linha = document.createElement("li");
    linha.className = "linha";
    linha.innerHTML = texto;

    lista.appendChild(linha);
})
