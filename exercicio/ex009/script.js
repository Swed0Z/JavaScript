function analisar(){
    const data = new Date()
    const ano = data.getFullYear()
    const nome = document.getElementById('nome')
    const anoNascimento = document.getElementById('anoNascimento')
    const resultado = document.getElementById('resultado')

    if (nome.value.length === 0 || anoNascimento.value.length === 0 || anoNascimento.value > ano){
        alert('Alguma informação está errada')
        return
    }

    const sex = document.getElementsByName('sexo')
    const idade = ano - anoNascimento.value
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id','foto')
    
    if (sex[0].checked){
        genero = 'um Homem'
    }else if(sex[1].checked){
        genero = 'uma Mulher'
    } else {
        alert('Por favor, selecione um gênero.')
        return
    }

    resultado.innerHTML = `<p>${nome.value} é ${genero} de ${idade} anos</p>`
}