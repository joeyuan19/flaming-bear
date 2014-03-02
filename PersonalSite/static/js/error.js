/* Redirection for page not found and other server errors */


var timer = 0;
var delay = 500;
var intervalId = -1;

function startTimer(seconds) {
    timer = seconds*1000;
    console.log(timer);
    intervalId = setInterval("runTimer()",delay); 
}
function runTimer() {
    updateDisplay();
    timer = timer-delay;
    console.log(timer);
    if (timer < 0) {
        clearInterval(intervalId);
        get('redirect-msg').innerHTML="<h2 style='color:red;'>Redirecting...</h2>";
        window.location='/';
    }
}
function updateDisplay() {
    get('timer').innerHTML=getSeconds();
}
function getSeconds() {
    return Math.floor(timer/1000.0%60);
}
function get(id) {
    return document.getElementById(id);
}


$(window).ready(function(){
    startTimer(10);
});
