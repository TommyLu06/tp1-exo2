input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
    if (x < 0) {
        x = 4
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    if (x > 4) {
        x = 0
    }
})
let y = 0
let x = 0
x = 0
y = 0
let dir = 1
led.plot(x, y)
basic.forever(function () {
    led.unplot(x, y)
    y += dir
    led.plot(x, y)
    if (y >= 4) {
        dir = -1
    } else if (y <= 0) {
        dir = 1
    }
})
