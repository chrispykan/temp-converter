function convert(tempInFarenheit) {
  //get temperature in farenheit from user input
  var tempInFarenheit = document.getElementById("farenheitInput").value;
  //calculate input to celcius
  const tempInCelcius = (tempInFarenheit - 32) * (5 / 9);
  //calculate to farenheight
  const tempInKelvin = tempInCelcius + 273.15;
  //display conversion in html
    document.getElementById("celciusOutput").innerHTML = tempInCelcius;
    document.getElementById("kelvinOutput").innerHTML = tempInKelvin;
};