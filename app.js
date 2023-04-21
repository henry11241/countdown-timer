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
    if(this.onStart) {
      this.onStart()
    }
    this.tick()
    this.intervalId = setInterval(this.tick, 1000)
  }

  pause = () => {
    clearInterval(this.intervalId)
  }

  tick = () => {
    if(this.timeRemianing <= 0) {
      this.pause()
      if(this.onComplete) {
        this.onComplete()
      }
    } else {
      this.timeRemianing = this.timeRemianing - 1
      if(this.onTick) {
        this.onTick()
      }
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

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started!')
  },
  onTick() {
    console.log('Timer just tick down')
  },
  onComplete() {
    console.log('Timer is completed!')
  }
})