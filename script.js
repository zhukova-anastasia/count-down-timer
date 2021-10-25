const newYear = "1 Jan 2022";
const monthEl = document.getElementById("months")
const dayEl = document.getElementById("days")
const hourEl = document.getElementById("hours")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")

function countdown() {
    const newYearsDate = new Date(newYear);
    const currDate = new Date();

    const totalSeconds = (newYearsDate - currDate) / 1000;

    const months = Math.floor(totalSeconds / 3600 / 24 / 30);
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    monthEl.innerHTML = months;
    dayEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000)