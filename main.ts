input.onButtonPressed(Button.A, function () {
    basic.showNumber(max / (0 - 0))
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    max = 0
})
let aktuel = 0
let max = 0
max = 0
input.setAccelerometerRange(AcceleratorRange.EightG)
basic.forever(function () {
    aktuel = input.acceleration(Dimension.X)
    if (aktuel > max) {
        max = aktuel
    }
})
