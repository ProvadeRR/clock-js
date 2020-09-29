const clock = document.getElementById('clock');
const color = document.getElementById('color');


function hexoClock(){
    const time = new Date();
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();
    
    if(h.length < 2){
        h =  '0' + h;
    }
    if(m.length < 2){
        m = '0' + m;
    }
    if(s.length < 2){
        s = '0' + s;
        console.log(123);
    }
    const clockString = h + ':' + m + ':' + s;
    const colorString = '#' + h + m + s;

    clock.innerHTML = clockString;
    color.innerHTML = colorString;

    document.body.style.background = colorString;
}

hexoClock();
setInterval(hexoClock , 1000);