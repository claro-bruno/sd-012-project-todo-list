let butRemFina = document.querySelector('#remover-finalizados')
let butAdd = document.querySelector('#criar-tarefa');
let butRemo = document.querySelector('#apaga-tudo');
let inpText = document.querySelector('#texto-tarefa');
let list = document.querySelector('#lista-tarefas');

const createList = () => {
  let li = document.createElement('li');
  li.innerHTML = inpText.value;
  list.appendChild(li);
  inpText.value = '';
};

butAdd.addEventListener('click', createList);

const eraseList = () => {
  list.innerHTML = '';
}

butRemo.addEventListener('click', eraseList);


let tagLi = document.getElementsByTagName('li');
const colorChange = () => {
  for (let index = 0; index < tagLi.length; index += 1) {
    
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
};

list.addEventListener('click', colorChange);

const doubleClick = () => {
  if (event.target.classList.contains('completed')){
    event.target.classList.remove('completed')
  }else{
    event.target.classList.add('completed')
  }
}

list.addEventListener('dblclick', doubleClick);








// const finaliz = () => {
//   if (event.target.classList.contains('completed')){
//     list.innerHTML = '';
//   }
// }

// butRemFina.addEventListener('click', finaliz);


