let lista = document.getElementById("lista-tarefa");
let botao = document.getElementById("criar-tarefa");
let textoAdiciona = document.getElementById("texto-tarefa");
let botaoApaga = document.getElementById("apaga-tudo");

function criarLi(){
    let tarefa = document.createElement("li");
    tarefa.classList.add("item-lista");
    tarefa.innerHTML = textoAdiciona.value;
    document.getElementById("lista-tarefas").appendChild(tarefa);
};

function limparInput(){
    textoAdiciona.value = "";
};

function apertaBotao(){
    criarLi();
    limparInput();
}

botao.addEventListener("click", apertaBotao);

