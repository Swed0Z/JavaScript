let numeros = [];
let resultado = document.getElementById('resultado');

function addNumbers() {
  let numeroInput = document.getElementById('numero');
  let numero = parseInt(numeroInput.value);
  let lista = document.getElementById('lista');

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
  resultado.innerHTML = "";
}
function result() {
  let maior = Math.max(...numeros);
  let menor = Math.min(...numeros);
  let tamanho = numeros.length;
  let soma = 0;

  for (let i = 0; i < tamanho; i++) {
    soma += numeros[i];
  }
  if (tamanho == 0) {
    alert('a lista está vazia')
    return;
  }
  let media = soma / tamanho;
  resultado.innerHTML = "";
  resultado.innerHTML += `A lista tem ${tamanho} elemento(s).<br>`;
  resultado.innerHTML += `O maior elemento é ${maior}.<br>`;
  resultado.innerHTML += `O menor número é ${menor}.<br>`;
  resultado.innerHTML += `A soma dos elementos é ${soma}.<br>`;
  resultado.innerHTML += `A média dos elementos é ${media}.<br>`;
}
function clean() {
  numeros = [];
  lista.innerHTML = "" ;
  resultado.innerHTML = "";
}
function handleKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addNumbers();
  }
}