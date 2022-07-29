function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (formAno.value.length == 0 || formAno.value > ano || formAno.value < 1900) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //criei um elemento img com o id = foto

        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'

        res.innerHTML = `${genero} com ${idade} anos.<br>`
        
        res.appendChild(img) // add o elemento img que criei aqui
    }
}