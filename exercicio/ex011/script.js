var inicio = document.getElementById('inicio');
var fim = document.getElementById('fim');
var passos = document.getElementById('passos');
var resultado = document.getElementById('resultado');

function contador() {
    var inicioValor = parseInt(inicio.value);
    var fimValor = parseInt(fim.value);
    var passosValor = parseInt(passos.value);
    resultado.innerHTML =''
    for (let i = inicioValor; i <= fimValor; i += passosValor) {
        resultado.innerHTML += `<p class="inline">${i},</p>`;
    }
}