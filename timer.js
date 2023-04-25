class Timer {
  constructor(durationInput, startButton, pauseButton, callback) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton
    if (callback) {
      this.onStart = callback.onStart
      this.onTick = callback.onTick
      this.onComplete = callback.onComplete
    }

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemianing)
    }
    this.tick()
    this.intervalId = setInterval(this.tick, 20)
  }

  pause = () => {
    clearInterval(this.intervalId)
  }

  tick = () => {
    if (this.timeRemianing <= 0) {
      this.pause()
      if (this.onComplete) {
        this.onComplete()
      }
    } else {
      this.timeRemianing = this.timeRemianing - 0.02
      if (this.onTick) {
        this.onTick(this.timeRemianing)
      }
    }
  }

  get timeRemianing() {
    return parseFloat(this.durationInput.value)
  }

  set timeRemianing(time) {
    this.durationInput.value = time.toFixed(2)
  }
}