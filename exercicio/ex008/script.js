function gerador() {
    let numero = Number(document.getElementById('numero').value)
    let resultado = document.getElementById('resultado')
    resultado.innerHTML =''
    if (!isNaN(numero)) {
      for (let i = 1; i <= 10; i++) {
        let resultadoNumero = numero * i;
        resultado.innerHTML +=`<p>${numero} x ${i} = ${resultadoNumero}</p>`
      }
    } else {
      alert("Por favor, digite um número válido.")
    }
  }