const paiBody = document.getElementsByTagName("body")[0];




function addTitle(){
    let title = document.createElement("header");
    title.innerHTML = "Minha Lista de Tarefas";
    paiBody.appendChild(title);
}
addTitle();

function addDiscretP(){
    let paragraf = document.createElement("p");
    paragraf.innerHTML = "Clique duas vezes em um item para marcá-lo como completo";
    paragraf.id = "funcionamento";
    paiBody.appendChild(paragraf);
}
addDiscretP();

function boxText(){
    let box = document.createElement("input");
    box.id = "texto-tarefa";
    paiBody.appendChild(box);
}
boxText();

function listOrdened(){
    let list = document.createElement("ol");
    list.id = "lista-tarefas";
    paiBody.appendChild(list);
}
listOrdened();

function buttonCriarTarefea(){
    let buttone = document.createElement("button");
    buttone.id = "criar-tarefa";
    paiBody.appendChild(buttone);
    buttone.innerHTML = "Criar-Tarefa";

    buttone.addEventListener("click", function createTarefa(event){
        let selecOl = document.getElementById("lista-tarefas");
        let criarli = document.createElement("li")
        selecOl.appendChild(criarli);
        let boxTexto =  document.getElementsByTagName("input")[0];
        criarli.innerHTML = boxTexto.value;
        boxTexto.value = "";   
    })

    buttone.addEventListener("mouseenter", function(event){
        event.target.style.backgroundColor = "orange";
    });
    buttone.addEventListener("mouseout", function (event){
        event.target.style.backgroundColor = "";
    })
}
buttonCriarTarefea();



