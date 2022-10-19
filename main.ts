let y = 0
let xx = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, y)
        basic.pause(100)
        y += 1
    }
    if (y > 4) {
        y = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(xx, 0)
        basic.pause(100)
        xx += 1
    }
    if (xx > 4) {
        xx = 0
    }
})
