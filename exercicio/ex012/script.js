var numeros = [];

function addNumbers() {
  const numeroInput = document.getElementById('numero');
  const numero = parseInt(numeroInput.value);
  const lista = document.getElementById('lista');

  if (isNaN(numero)){
    alert('Você não escolheu um número, digite novamente');
    return;
  }
  if (numero < 1 || numero > 100) {
    alert(`O número ${numero} está fora do intervalo permitido (1 a 100).`);
    return;
  }

  if (numeros.includes(numero)) {
    alert(`O número ${numero} já está incluído no array.`);
    return;
  }

  numeros.push(numero);
  lista.innerHTML += `${numero}<br>`;
}
function result() {
  
}
function clean() {
  numeros = [];
  lista.innerHTML = "" ;
}