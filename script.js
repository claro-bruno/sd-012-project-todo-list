let containerTitle = document.querySelector('#title'); //Questao 1
let containerSubTitle = document.querySelector('#funcionamento') //Questao 2



//Questao 1

getTitle = 'Minha Lista de Tarefasdo';
let addTitle = document.createElement('h1');
addTitle.innerHTML = getTitle;
containerTitle.appendChild(addTitle)

//questao 2

getSubTitle = 'Clique duas vezes em um item para marcá-lo como completo';
let addSubTitle = document.createElement('p');
addSubTitle.innerHTML = getSubTitle;
containerSubTitle.appendChild(addSubTitle)

//questao 3
