
var lista = document.querySelector("#lista-tarefas");
var botao = document.querySelector("#criar-tarefa");
var input = document.querySelector("#texto-tarefa");

botao.addEventListener("click", function(){
    let texto = input.value;
    let linha = document.createElement("li");
    linha.className = "linha";
    linha.innerHTML = texto;

    lista.appendChild(linha);
    input.value = "";
})

lista.addEventListener("click", function(event){
    let tamanhoLista = document.getElementsByTagName("li").length;
    if(event.target.classList.contains("linha")){
        for(let i = 0; i < tamanhoLista; i++){
            document.getElementsByTagName("li")[i].classList.remove("selected");
        }
        event.target.classList.add("selected");
    }
})


lista.addEventListener("dblclick", function(event){
    if(event.target.classList.contains("linha")){
        event.target.classList.toggle("completed");
    }
    else if(event.target.classList.contains("completed")){
        event.target.classList.toggle("completed");
    }
})
