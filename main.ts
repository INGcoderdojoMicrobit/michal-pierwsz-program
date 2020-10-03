input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showIcon(IconNames.Tortoise)
})
basic.showString("hej")
basic.showNumber(0)
basic.forever(function () {
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        basic.showString("tak")
        basic.showNumber(0)
        basic.pause(100)
    }
})
