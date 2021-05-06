const btnCriaTarefa = document.getElementById('criar-tarefa');
btnCriaTarefa.innerHTML = 'Adiciona Tarefa';
const inputField = document.getElementById('texto-tarefa');
const ordList = document.getElementById('lista-tarefas');
let lista2 = document.createElement('li');

btnCriaTarefa.addEventListener('click', function () {
  let lista = document.createElement('li');
  lista.innerHTML = inputField.value;
  ordList.appendChild(lista);
  inputField.value = '';
  changeColor();
  console.log('lista do btn adicionar',lista);
  // lista.addEventListener('click', changeColor);
  lista.addEventListener('dblclick', taskEnd);
  apagaTudo();
  // lista.addEventListener('dblclick', taskNotEnd);
});

function changeColor() {
  let lista = document.querySelectorAll('li');
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].addEventListener('click', function (event) {
      const greyBackground = document.querySelector('.color');
      if (event.target.className !== 'color') {
        event.target.classList.add('color');
        if (greyBackground) { // verifica se ele existe
          greyBackground.classList.remove('color');
        }        
      }
    });
  }
}

function taskEnd(event) { // NÃO ESTÁ FUNCIONANDO
  if (event.target.className !== 'completed') {
    event.target.classList.add('completed');
  }
  else {
    event.target.classList.remove('completed');
  }
}

const btnApaga = document.querySelector('#apaga-tudo');
btnApaga.innerHTML = 'apagar';

function apagaTudo() {
  let lista = document.querySelectorAll('li');
  for (let index = 0; index <= lista.length; index += 1) {
    let listaFilhos = ordList.childNodes[index];
    btnApaga.addEventListener('click', function () {
      console.log(lista.length);
      listaFilhos.remove();
    })  
  }
}





// function changeColor() {
//   let lista = document.querySelectorAll('li');
//   for (let index = 0; index < lista.length; index += 1) {
//     lista[index].addEventListener('click', function (event) {
//       const greyBackground = document.querySelector('.color');
//       if (event.target.className !== 'color') {
//         event.target.classList.add('color');
//         greyBackground.classList.remove('color');
//       }
//     });
//   }
// }

// function changeColor(event) {
//   if (event.target.style.backgroundColor !== 'rgb(128, 128, 128)') {
//     event.target.style.backgroundColor = 'rgb(128, 128, 128)';
//   }
//   else {
//     event.target.style.backgroundColor ='';
//   }
// }


// function changeColor(event) {
//   event.target.style.backgroundColor = 'rgb(128, 128, 128)';
//   let lista = document.getElementsByTagName('li');
//   for (let index = 0; index < lista.length; index += 1) {
//     if (lista)
//     // lista.className = 'completed';
//   }    
// }

// function taskEnd(event) {
//   event.target.className = 'completed';
//   let lista = document.getElementsByTagName('li');
//   console.log(lista.length);
//   for (let index = 0; index < lista.length; index += 1) {
//     lista[index].addEventListener('click', function (event2) {
//       if (event2.target.className === 'completed') {
//         event2.target.classList.remove('completed');
//       }
//     });
//   }
// }


// function changeColor(event) { 
//   let lista = document.getElementsByTagName('li');
//     lista.style.backgroundColor = 'rgb(128, 128, 128)';
//     lista.className = 'completed';
// }


// function taskNotEnd(event) {
//   if (event.target.className = 'completed') {
//     event.target.className = '';
//   }
// }

// function criaTarefa() {
//   btnCriaTarefa.addEventListener('click', function () {
//     let lista = document.createElement('li');
//     lista.innerHTML = inputField.value;
//     ordList.appendChild(lista);
//     inputField.value = '';
//     lista.addEventListener('click', changeColor);
//     lista.addEventListener('dblclick', taskEnd);
//     // lista.addEventListener('dblclick', taskNotEnd);
//   });
// }
// criaTarefa()
