radio.onReceivedNumber(function (receivedNumber) {
    Numero = receivedNumber
    if (convertirALetra) {
        basic.showString("" + (LETRAS[Numero]))
    } else {
        basic.showNumber(Numero)
    }
})
input.onButtonPressed(Button.A, function () {
    if (convertirALetra) {
        convertirALetra = false
        basic.showString("123")
    } else {
        convertirALetra = true
        basic.showString("ABC")
    }
})
let Numero = 0
let LETRAS: string[] = []
let convertirALetra = false
radio.setGroup(1)
convertirALetra = false
LETRAS = ["-", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
basic.forever(function () {
	
})
