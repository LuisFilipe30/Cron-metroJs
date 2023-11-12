var sec=0
var min=0
var hour=0
var interval

function twoDigits(number){
    if(number<10){
        return('0' + number)
    } else{
        return(number)
    }
}

function start(){
    watch()
    interval = setInterval(watch, 1000);
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('watch').innerText='00:00:00';
}

function watch(){
    sec++
    if(sec === 60){
        min++
        sec = 0
        if(min === 60){
            hour++
            sec=0
            min=0

        }
    }
    document.getElementById('watch').innerText=twoDigits(hour)+':'+twoDigits(min)+':'+twoDigits(sec);
}