let lista = document.getElementById("lista-tarefa");
let botao = document.getElementById("criar-tarefa");
let textoAdiciona = document.getElementById("texto-tarefa");
let botaoApaga = document.getElementById("apaga-tudo");

function cinza(event){
    let classe = document.getElementsByClassName("selecionado")[0];
    if(classe){
        classe.classList.remove("selecionado");
        classe.style.backgroundColor = "";
    }
    event.target.classList.add("selecionado");
    event.target.style.backgroundColor = "rgb(128,128,128)";
    
}

function criarLi(){
    let tarefa = document.createElement("li");
    tarefa.classList.add("item-lista");
    tarefa.innerHTML = textoAdiciona.value;
    document.getElementById("lista-tarefas").appendChild(tarefa);
    tarefa.addEventListener("click", cinza);
};

function limparInput(){
    textoAdiciona.value = "";
};

function apertaBotao(){
    criarLi();
    limparInput();    
}

botao.addEventListener("click", apertaBotao);



