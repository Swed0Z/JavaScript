function analisar(){
    let data = new Date()
    let ano = data.getFullYear()
    let nome = document.getElementById('nome')
    let anoNascimento = document.getElementById('anoNascimento')
    let resultado = document.getElementById('resultado')
    
    resultado.innerHTML = '<img id="imagemPessoa" src="sem_imagem.png" alt="imagem da pessoa">'

    if (nome.value.length === 0 || anoNascimento.value.length === 0 || anoNascimento.value > ano){
        alert('Alguma informação está errada')
        return
    }

    let sex = document.getElementsByName('sexo')
    let idade = ano - anoNascimento.value
    let genero = ''
    var img = ''
    
    if (sex[0].checked){
        genero = 'um Homem'
        if ( idade >=0 && idade < 10 ){
            img = "homem_criança.jpg";
        }else if(idade >=10 && idade < 24){
            img = "homem_jovem.jpg";
        }else if(idade >=24 && idade < 55){
            img = 'homem_adulto.jpg';
        }else if(idade >=55){
            img = "homem_idoso.jpg";
        }
    }else {
        genero = 'uma Mulher'
        if ( idade >=0 && idade < 10 ){
            img = "mulher_criança.jpg";
        }else if(idade >=10 && idade < 24){
            img = "mulher_jovem.jpg";
        }else if(idade >=24 && idade < 55){
            img = "mulher_adulto.jpg";
        }else if(idade >=55){
            img = "mulher_idosa.jpg";
        }
    }
    document.getElementById("imagemPessoa").src = img;
    resultado.innerHTML += `<p>${nome.value} é ${genero} de ${idade} anos</p>`
}