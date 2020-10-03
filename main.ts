basic.showString("hej")
basic.forever(function () {
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        music.ringTone(262)
    }
})
