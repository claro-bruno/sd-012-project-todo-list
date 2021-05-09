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