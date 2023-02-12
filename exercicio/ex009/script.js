function analisar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nome = document.getElementById('nome')
    var anoNascimento = document.getElementById('anoNascimento')
    var sexo = document.getElementsByTagName('sexo')
    var resultado = document.getElementById('resultado')

    if (anoNascimento.value.length == 0 || anoNascimento.value > ano || nome.length == 0){
        window.alert('alguma informação está errada')
    }
}