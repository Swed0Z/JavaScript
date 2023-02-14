function analisar(){
    let data = new Date()
    let ano = data.getFullYear()
    let nome = document.getElementById('nome')
    let anoNascimento = document.getElementById('anoNascimento')
    let resultado = document.getElementById('resultado')
    if (anoNascimento.value.length == 0 || anoNascimento.value > ano || nome.length == 0){
        alert('alguma informação está errada')
    }else {
        let sex = document.getElementsByName('sexo')
        let idade = ano - anoNascimento.value
        let genero = ''
    
        if (sex[0].checked){
            genero = 'um Homem'
        }else if(sexo[1].checked){
        genero = 'uma Mulher'
        }
        resultado.innerHTML =`<p>${nome} é ${genero} de ${idade} anos</p>`
}
}