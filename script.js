let lista = document.getElementById('lista-terefa');
let botao = document.getElementById('criar-tarefa');
let apaga = document.getElementById('apaga-tudo');
let texto = document.getElementById('texto-tarefa');

function cinza(event){
    let classe = document.getElementsByClassName("selecionado")[0];
    if(classe){
        classe.classList.remove("selecionado");
        classe.style.backgroundColor = "";
    }
    event.target.classList.add("selecionado");
    event.target.style.backgroundColor = "rgb(128,128,128)";

}