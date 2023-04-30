function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("watcher");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}
const timer_el = document.querySelector('.stoper');
const btn_start =document.getElementById('start');
const btn_stop = document.getElementById("stop");
const btn_reset = document.getElementById("reset");

let seconds = 0;
let interval = null;

btn_start.addEventListener('click',start);
btn_stop.addEventListener('click',stop);
btn_reset.addEventListener('click',reset);

function timer()
{
    seconds++;
   
    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds-(hrs*3600))/60);
    let secs = seconds % 60;

    if(secs<10) secs='0'+secs;
    if(mins<10) mins = "0" +mins;
    if (hrs<10) hrs = "0" +hrs;

    timer_el.innerText = `${hrs}:${mins}:${secs}`;
}
function start()
{
    if(interval){
        return
    }
    interval = setInterval(timer ,1000);
}
function stop()
{
    clearInterval(interval);
    interval=null;
}
function reset(){
    stop();
    seconds = 0;
    timer_el.innerText = '00:00:00';
}


var endTime = (+localStorage.endTime || 0)
function setTimer() {
    var duration = +prompt('How long to set the timer (minutes)', '15')
    endTime = localStorage.endTime = duration * 60e3 + Date.now()
    update()
}
function resetTimer() {
    endTime = 0
}

function update() {
    var timeLeft = endTime - Date.now()
    if (timeLeft < 0) {
        setText('00:00')
    } else {
        var minutes = Math.floor(timeLeft / 60e3)
        var seconds = Math.floor(timeLeft / 1e3) % 60
        setText(`${minutes}:${seconds.toString(10).padStart(2, '0')}`)
    }
}
function setText(text) {
    document.getElementById('timer').textContent = text
}
setInterval(update, 200)

