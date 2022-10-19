let xx = 0
input.onButtonPressed(Button.A, function () {
    xx = 0
    while (xx <= 5) {
        led.plot(xx, 0)
        basic.pause(100)
        basic.clearScreen()
        xx += 1
    }
})
basic.forever(function () {
	
})
