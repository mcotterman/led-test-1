input.onButtonPressed(Button.A, function () {
    red = randint(0, 1)
    green = randint(0, 1)
    blue = randint(0, 1)
    pins.digitalWritePin(DigitalPin.P1, blue)
    pins.digitalWritePin(DigitalPin.P8, green)
    pins.digitalWritePin(DigitalPin.P16, red)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
let blue = 0
let green = 0
let red = 0
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P8, 0)
