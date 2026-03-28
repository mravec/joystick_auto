radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xHodnota = value
    }
    if (name == "y") {
        yHodnota = value
    }
    if (name == "t") {
        if (value == 1) {
            cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 106, 108, 0)
        } else if (value == 2) {
            cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 255)
        } else if (value == 3) {
            music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.InBackground)
        } else if (value == 4) {
            music.play(music.stringPlayable("B B B G G G A A ", 120), music.PlaybackMode.InBackground)
        } else if (value == 5) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        } else if (value == 6) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
        } else {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.InBackground)
        }
    }
})
let yHodnota = 0
let xHodnota = 0
music.setVolume(255)
radio.setGroup(1)
basic.showIcon(IconNames.TShirt)
basic.forever(function () {
    cuteBot.motors(yHodnota + xHodnota, yHodnota - xHodnota)
})
