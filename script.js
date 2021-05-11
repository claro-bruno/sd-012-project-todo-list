const paiBody = document.getElementsByTagName("body")[0];


function addTitle(){
    let title = document.createElement("header");
    title.innerHTML = "Minha Lista de Tarefas";
    paiBody.appendChild(title);
}
addTitle();

function addP(){
    let paragraf = document.createElement("p");
    paragraf.innerHTML = "Clique duas vezes em um item para marcá-lo como completo";
    paragraf.id = "funcionamento";
    paiBody.appendChild(paragraf);
}
addP();

function boxText(){
    let box = document.createElement("input");
    box.id = "texto-tarefa";
    paiBody.appendChild(box);
}
boxText();

function buttonCriarTarefea(){
    let buttonCriar = document.createElement("button");
    buttonCriar.id = "criar-tarefa";
    paiBody.appendChild(buttonCriar);
    buttonCriar.innerHTML = "Criar-Tarefa";

    buttonCriar.addEventListener("click", function createTarefa(event){
        let selecOl = document.getElementById("lista-tarefas");
        let criarli = document.createElement("li")
        criarli.addEventListener("click", clickLi);
        criarli.addEventListener("dblclick", completed);
        selecOl.appendChild(criarli);
        let boxTexto =  document.getElementsByTagName("input")[0];
        criarli.innerHTML = boxTexto.value;
        boxTexto.value = "";
    })

    function listOrdened(){
        let list = document.createElement("ol");
        list.id = "lista-tarefas";
        paiBody.appendChild(list);
    }
    listOrdened();

    buttonCriar.addEventListener("mouseenter", function(event){
        event.target.style.backgroundColor = "orange";
    });
    buttonCriar.addEventListener("mouseout", function (event){
        event.target.style.backgroundColor = "";
    })
}
buttonCriarTarefea();

function clearAllLi(){
    let buttonClear = document.createElement("button");
    buttonClear.innerHTML = "Limpar Tarefas";
    buttonClear.id = "apaga-tudo";
    paiBody.appendChild(buttonClear);
    buttonClear.addEventListener("click",buttonClearAll);
}
clearAllLi();

function buttonClearAll(){
    let liS = document.querySelectorAll("li");
    for(index = 0; index < liS.length; index++){
        liS[index].remove();
    }
}

function clickLi(event){
    let listUls = document.getElementsByTagName("li");
    for(let index = 0; index < listUls.length; index++){
        listUls[index].style.backgroundColor = "";
    }
     event.target.style.backgroundColor = "rgb(128, 128, 128)";
}

function completed(event){
    if(event.target.classList == "completed"){
        event.target.classList.remove("completed");
    }else{
        event.target.classList.add("completed");
    }
}