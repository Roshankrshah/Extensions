
window.onload = () => {
    var curPos;

    var geoSuccess = function (position) {
        curPos = position;
        console.log(curPos);

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${curPos.coords.latitude}&lon=${curPos.coords.longitude}&appid=f283e7a1e3a828ab328d61c9fca05aad&units=metric`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                document.getElementById('text_location').innerHTML = data.name;
                document.getElementById('text_location_country').innerHTML = data.sys.country;
                document.getElementById('text_temp').innerHTML = Math.round(data.main.temp);
                document.getElementById('text_feelslike').innerHTML = Math.round(data.main.feels_like);
                document.getElementById('text_desc').innerHTML = data.weather[0].description;

                document.getElementById('icon').src = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;
            })
    };

    navigator.geolocation.getCurrentPosition(geoSuccess)
}