//Clock function
function startTime() {
    //Variables
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var color = "#" +  hours + minutes + seconds; //Color contain a string with the hexadecimal code of the color

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById('hours').innerHTML =  '<span id="hoursValue" class="' + hours + '">' + hours + '</span>';
    document.getElementById('minutes').innerHTML =  '<span id="minutesValue" class="' + minutes + '">' + minutes + '</span>';
    document.getElementById('seconds').innerHTML = '<span id="secondsValue" class="' + seconds + '">' + seconds + '</span>';

    var loop = setTimeout(startTime, 1000);

    //Console log section
    console.log("Color : " + color);
    //console.log("Hours : " + hours);
    //console.log("Minutes : " + minutes);
    //console.log("Seconds : " + seconds);

    document.getElementById('test').style.background = color;
}
function checkTime(number) {
    if (number < 10){
        number = "0" + number}  // add zero in front of numbers < 10
    return number;
}

//TODO: Add the information button
function info(){
    alertify.alert('Information','The color is the background is composed from the hexadecimal of the hour following this format "#hhmmss", this project is open source, which mean you can check it on <a  target="_blank" href="https://github.com/Okuuu/TimeColor">GitHub</a>')
}
//TODO: Add a copy to clipboard function


