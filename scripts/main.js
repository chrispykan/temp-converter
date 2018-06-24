console.log("It's-a me, JS!");

function convert(tempInFarenheit) {
  //get temperature in farenheit from user input
  var tempInFarenheit = document.getElementById("farenheitInput").value;
  //calculate input to celcius
  var tempInCelcius = (tempInFarenheit - 32) * (5 / 9);
  //calculate to farenheight
  var tempInKelvin = tempInCelcius + 273.15;
  //display conversion in html
    document.getElementById("celciusOutput").innerHTML = tempInCelcius;
    document.getElementById("kelvinOutput").innerHTML = tempInKelvin;
};
    