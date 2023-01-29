function verifica() {
    data = new Date()
    ano = data.getFullYear()
    nasc = Number((document.querySelector('#nasc').value))
    masc = document.querySelector('#masc')
    
    if (!nasc) {
        alert('ERRO: Você não digitou o ano de Nascimento!')
    } else {
        idade= ano - nasc
    } 
    
    fem = document.querySelector('#fem')
    msg = document.querySelector('.msgbox')
    imagem = document.querySelector('.imagembox')

    foto = document.createElement('img')
    foto.setAttribute('width', '100%')
    foto.style.borderRadius = '50px'
    foto.style.boxShadow = '2px 2px 3px rgba(0, 0, 0, 0.400)'
    foto.style.maxWidth = '50vw'

    if (masc.checked) {
        sexo = 'masculino'
    } else if (fem.checked) {
        sexo = 'feminino'
    } else {
        alert('Erro: Você não escolheu o sexo !')
    }

    if (sexo == 'masculino') {
        
        if (idade < 0) {
            alert('ERRO: (idade < 0) - Essa pessoa ainda não nasceu!')
            foto.src = 'imagens/cegonha.jpg'
        } else if(idade >=0 && idade < 14) {
            foto.src = 'imagens/menino.jpg'
        } else if (idade >= 14 && idade < 60){
            foto.src = 'imagens/h_jovem.jpg'
        } else if (idade >= 60 && idade < 120) {
            foto.src = 'imagens/idoso.jpg'
        } else {
            foto.src = 'imagens/mumia.jpg'
            alert('Erro: (idade > 120 anos) - Essa pessoa já foi mumificada!')
        }
    }

    if (sexo == 'feminino') {
        if (idade < 0) {
            foto.src = 'imagens/cegonha.jpg'
            alert('ERRO: (idade < 0) - Essa pessoa ainda não nasceu!')
        } else if (idade >=0 && idade < 14) {
            foto.src = 'imagens/menina.jpg'
        } else if (idade >= 14 && idade < 60) {
            foto.src = 'imagens/m_jovem.jpg'
        } else if (idade >= 60 && idade < 120){
            foto.src = 'imagens/idosa.jpg'
        } else {
            foto.src = 'imagens/mumia.jpg'
            alert('ERRO: (idade > 120 anos) - Essa pessoa já foi mumificada!')
        }
    }

    if (idade >= 0) {
        msg.innerHTML = `Pessoa do sexo ${sexo} com ${idade} anos`
        imagem.innerHTML = ''
        imagem.appendChild(foto)
    } else {
        msg.innerHTML = `Pessoa do sexo ${sexo} que ainda vai nascer daqui a ${-idade} anos`
        imagem.innerHTML = ''
        imagem.appendChild(foto)
    }
    

}