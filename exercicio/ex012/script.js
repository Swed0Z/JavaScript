const numeros = [];

function addNumbers() {
  const numeroInput = document.getElementById('numero');
  const numero = parseInt(numeroInput.value);
  const resultado = document.getElementById('resultado');
  
  if (numero < 1 || numero > 100) {
    alert(`O número ${numero} está fora do intervalo permitido (1 a 100).`);
    return;
  }

  if (numeros.includes(numero)) {
    alert(`O número ${numero} já está incluído no array.`);
    return;
  }

  numeros.push(numero);
  resultado.innerHTML += `${numero}<br>`;
}
