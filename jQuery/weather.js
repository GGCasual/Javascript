$(function() {                                                               ////USING API TO PRINT OUT THE WEATHER FROM A WEATHER SITE
    let apiKey = "2bdef9c4c9d67654b13983c6b6fe9842"  //weather api key

    let url = "http://api.openweathermap.org/data/2.5/weather?q=Houston";
    
    $.get(url + '&appid=' + apiKey)
    .done((response) => {
        console.log(response.main.temp);
        temperatureConversion(response.main.temp)
    });

    function temperatureConversion(kelvin) {
        let degC = kelvin -273.15;
        let degCInt = Math.floor(degC);

        let degF = degC * 1.8 + 32;

        let degFInt = Math.floor(degF);

        console.log(degCInt);
        console.log(degFInt);

        $('#temp').html(`<p> ${degCInt}&#176C ${degFInt}&#176F </p>`)
    }
})




// fetch('http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=2bdef9c4c9d67654b13983c6b6fe9842') ////ANOTHER WAY TO GET THE DATA FROM THE WEATHER SITE
// .then((result)=>{
//     return result.json()
// })
// .then((jsonObj)=>{
//     console.log(jsonObj)
// })