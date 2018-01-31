const storage = document.getElementById('storage');
var mode = 'rgb';

//Clock function
function startTime() {

    var hoursDiv = document.getElementById('hours');
    var minutesDiv = document.getElementById('minutes');
    var secondsDiv = document.getElementById('seconds');

    if(mode == 'rgb'){
        var obj = getColorRGB();
    }
    else if(mode == 'hexadecimal'){
        var obj = getColorHexadecimal();
    }

    //Console log section
    //console.log("Color : " + obj.color);
    //console.log("Hours : " + obj.hours);
    //console.log("Minutes : " + obj.minutes);
    //console.log("Seconds : " + obj.seconds);

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

function info(){
    alertify.alert('Information',
        'The color in the background is composed from the hexadecimal of the time ' +
        '(or of the rgba of the time) following this format "#hhmmss" (or "rgba(hh,mm,ss,1.0)", this project is open source, ' +
        'which mean you can check it on ' +
        '<a  target="_blank" href="https://github.com/Okuuu/TimeColor">GitHub</a>')
}

function copy () {
    var div = document.createElement("div");
    if(mode == 'hexadecimal'){
        var obj = getColorHexadecimal();
    }
    else if(mode == 'rgb'){
        var obj = getColorRGB();
    }

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

function getColorHexadecimal() {
    //This function return the date and the color in rgba

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

function getColorRGB(){
    //This function return the date and the color in rgba
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    var color = 'rgba(' + hours + ',' + minutes + ',' + seconds + ',1.0)';
    //Color contain a string with the rgba code of the color

    return {
        color: color,
        hours : ''+hours,
        minutes : ''+minutes,
        seconds : ''+seconds
    }
}

function changeColorMode() {
    if (mode == 'rgb'){
        mode = 'hexadecimal';
        alertify.warning('Changed to Hexadecimal')
    }
    else if(mode == 'hexadecimal'){
        mode = 'rgb';
        alertify.warning('Changed to RGBA')

    }
}
