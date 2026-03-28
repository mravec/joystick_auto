radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xHodnota = value
    }
    if (name == "y") {
        yHodnota = value
    }
})
let yHodnota = 0
let xHodnota = 0
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    cuteBot.motors(yHodnota + xHodnota, yHodnota - xHodnota)
})
