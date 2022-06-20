var agora = new Date()
var diaSem = agora.getDay()
/* 
No JavaScript os dias da semana seguem exatamente nesta posição!

0 = Domingo
1 = Segunda-Feira
2 = Terça-Feira
3 = Quarta-Feira
4 = Quinta-Feira
5 = Sexta-Feira
6 = Sábado

*/

switch (diaSem) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda-Feira")
        break
    case 2:
        console.log("Terça-Feira")
        break
    case 3:
        console.log("Quarta-Feira")
        break
    case 4:
        console.log("Quinta-Feira")
        break
    case 5:
        console.log("Sexta-Feira")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        console.log("[Erro] Dia inválido!")
        break
}