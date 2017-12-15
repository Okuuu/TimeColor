//Clock function
const storage = document.getElementById('storage');

function startTime() {

    var hoursDiv = document.getElementById('hours');
    var minutesDiv = document.getElementById('minutes');
    var secondsDiv = document.getElementById('seconds');
    var obj = getColor();

    //Console log section
    console.log("Color : " + obj.color);
    console.log("Hours : " + obj.hours);
    console.log("Minutes : " + obj.minutes);
    console.log("Seconds : " + obj.seconds);

    var hours = ""+obj.hours;

    //Variables
    hoursDiv.innerHTML =  '<span id="hoursValue">' + obj.hours + '</span>';
    minutesDiv.innerHTML =  '<span id="minutesValue">' + obj.minutes + '</span>';
    secondsDiv.innerHTML = '<span id="secondsValue">' + obj.seconds + '</span>';

    var loop = setTimeout(startTime, 1000);

    document.getElementById('test').style.background = obj.color;
}
function checkTime(number) {
    if (number < 10){
        number = "0" + number}  // add zero in front of numbers < 10
    return number;
}

//TODO: Add the information button
function info(){
    alertify.alert('Information',
        'The color in the background is composed from the hexadecimal of the time ' +
        'following this format "#hhmmss", this project is open source, ' +
        'which mean you can check it on ' +
        '<a  target="_blank" href="https://github.com/Okuuu/TimeColor">GitHub</a>')
}
//TODO: Add a copy to clipboard function

function copy () {
    var div = document.createElement("div");
    var obj = getColor();

    div.innerHTML= obj.color;
    storage.appendChild(div);
    div.setAttribute("contentEditable", true);
    div.setAttribute("onfocus", "document.execCommand('selectAll',false,null)");
    div.focus();

    var successful = document.execCommand('copy');
    if(successful){
        alertify.success('Copied !');
        div.remove();
    }
    else{
        alertify.error('An error occured, please retry')
    }
}

function getColor() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);


    var color = '#' +  hours + minutes + seconds;
    //Color contain a string with the hexadecimal code of the color

    //Returning an object which contains all the information we need
    return {
        color: color,
        hours : ''+hours,
        minutes : ''+minutes,
        seconds : ''+seconds
    }
}

