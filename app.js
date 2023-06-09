const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * Math.PI * 2
circle.setAttribute('stroke-dasharray', perimeter)


let duration
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration
    console.log('Timer started!')
  },
  onTick(timeRemianing) {
    circle.setAttribute('stroke-dashoffset', 
      perimeter * timeRemianing / duration - perimeter
    )
  },
  onComplete() {
    console.log('Timer is completed!')
  }
})