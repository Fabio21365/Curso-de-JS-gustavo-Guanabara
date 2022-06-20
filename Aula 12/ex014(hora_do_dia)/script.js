function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()

    var hora = 22
    
    msg.innerHTML = `Boa noite ! <br>Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = 'rgb(200, 191, 176)'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = 'rgb(222, 136, 59)'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = 'rgb(139, 139, 139)'
    }
}