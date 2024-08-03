basic.forever(function () {
    for (let index = 0; index < 7 + (99 + 1); index++) {
        music.play(music.stringPlayable("C5 G A C5 G B E F ", 120), music.PlaybackMode.LoopingInBackground)
        basic.showNumber(1000)
        led.toggle(4, 3)
    }
})
