input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        let you = 0
        if (100 + randint(0, 100) > 150) {
            score += 5
            basic.showString("" + (score))
            basic.showString("" + (life))
        } else if (100 + randint(0, 100) < 150) {
            life += -5
            basic.showString("" + (life))
            basic.showString("" + (score))
        } else if (life == 0) {
            let lose = 0
            game.gameOver()
            basic.showString("" + (you))
            basic.showString("" + (lose))
            basic.showString("" + (life))
            basic.showString("" + (score))
        } else if (score == 100) {
            let win = 0
            game.gameOver()
            basic.showString("" + (you))
            basic.showString("" + (win))
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    game.pause()
})
let life = 0
let score = 0
score = 0
life = 100
