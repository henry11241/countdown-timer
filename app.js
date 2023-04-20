class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }

  start = () => {
    this.tick()
    this.intervalId = setInterval(this.tick, 1000)
  }

  pause = () => {
    clearInterval(this.intervalId)
  }

  tick = () => {
    if(this.timeRemianing <= 0) {
      this.pause()
    } else {
      this.timeRemianing = this.timeRemianing - 1
    }
  }

  get timeRemianing() {
    return parseFloat(this.durationInput.value)
  }

  set timeRemianing(time) {
    this.durationInput.value = time
  }
}

const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton)