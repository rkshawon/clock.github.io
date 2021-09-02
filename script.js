var second = document.querySelector(".second")
var minute = document.querySelector(".minute")
var hour = document.querySelector(".hour")
var seconds = document.querySelector(".seconds")
var minutes = document.querySelector(".minutes")
var hours = document.querySelector(".hours")

//clock functionality
function clock(){
    const deg = 6
    let time = new Date()
    let sec = time.getSeconds()
    let min = time.getMinutes()
    let hr = time.getHours()

    //for digital clock
    seconds.textContent = sec
    minutes.textContent = min
    hours.textContent = hr

    //for analog clock
    sec = time.getSeconds() * deg
    min = time.getMinutes() * deg
    hr = time.getHours() * 30

    second.style.transform =  `rotate(${sec}deg)`
    minute.style.transform =  `rotate(${min}deg)`
    hour.style.transform =  `rotate(${hr+(min/12)}deg)`
}

setInterval(clock);