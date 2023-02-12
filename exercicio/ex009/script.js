function analisar(){
    var data = new Date
    var ano = data.getFullYear
    var Nome = document.getElementById('nome')
    var AnoNascimento = document.getElementById('AnoNascimento')
    var Sexo = document.getElementsByTagNameNS('sexo')
    var resultado = getElementById('resultado')
    if (AnoNascimento.value.length == 0 || AnoNascimento.value > ano || Nome.length == 0){
        window.alert('alguma informação está errada')
    }
}
