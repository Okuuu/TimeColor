function startTime() {

    //Variables
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var color = "#" +  hours + minutes + seconds;

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    var loop = setTimeout(startTime, 1000);

    //Console log section
    console.log("Color : " + color);
    console.log("Hours : " + hours);
    console.log("Minutes : " + minutes);
    console.log("Seconds : " + seconds);

    document.getElementById('test').style.background = color;
}
function checkTime(number) {
    if (number < 10){
        number = "0" + number}  // add zero in front of numbers < 10
    return number;
}


