function analisar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nome = document.getElementById('nome')
    var anoNascimento = document.getElementById('anoNascimento')
    var resultado = document.getElementById('resultado')
    if (anoNascimento.value.length == 0 || anoNascimento.value > ano || nome.length == 0){
        alert('alguma informação está errada')
    }else {
        var sexo = document.getElementsByTagName('sexo')
        var idade = ano - anoNascimento.value
        var genero = ''
    
        if (sexo[0].checked){
            genero = 'um Homem'
        }else if(sexo[1].checked){
        genero = 'uma Mulher'
        }
        resultado.innerHTML =`<p>${nome} é ${genero} de ${idade} anos</p>`
}
}