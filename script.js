const start =
    document.querySelector(".start")
const stop =
    document.querySelector(".stop")

const clock =
    document.querySelector(".clock")


let digital;
function startclock() {

    if (digital) return;

    let date = new Date();
    clock.innerHTML =
        date.toLocaleTimeString();

    digital = setInterval(function () {
        let date = new Date();
        clock.innerHTML =
            date.toLocaleTimeString();
    }, 1000);
}

startclock();

start.addEventListener("click", function () {
    startclock();
});

stop.addEventListener("click", function () {
    clearInterval(digital);
    digital = null;
});