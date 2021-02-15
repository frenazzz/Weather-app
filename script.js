const input = document.querySelector('.search-input'); 
const button = document.querySelector('.search-btn');
const warning = document.querySelector('.warning');

const cityName = document.querySelector('.city-name');
const temperature = document.querySelector('.temperature');
const weatherImg = document.querySelector('img');
const icon =document.querySelector('canvas');

const weather = document.querySelector('.weather');
const pressure = document.querySelector('.pressure-info');
const humidity = document.querySelector('.humidity-info');

const body = document.querySelector('body');


const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';

const apiKey = '&appid=d8f7f79d421db03c30b7033a65af910b';

const units = '&units=metric';


// link + &api key + &units

let city;
let url;

const getApi = () => {
    city = (!input.value) ? 'Warsaw' : input.value;
    url = apiLink + city + apiKey + units;

    const skycons = new Skycons({"color": "seashell"});
    
    axios.get(url)
        .then(res => {
            const temp = res.data.main.temp;
            const hum = res.data.main.humidity;
            const press = res.data.main.pressure;
            const status = Object.assign({}, ...res.data.weather);

            console.log(res.data); // tablica z danymi 
            console.log(status);  // głowne dane pogodowe

            cityName.textContent = res.data.name + ' ';
            temperature.textContent = Math.floor(temp) + '°C';
            humidity.textContent = res.data.main.humidity + '%';
            pressure.textContent = res.data.main.pressure + 'hPa';
            weather.textContent = status.main;

            warning.textContent = '';
            input.value = '';

            
            if (status.id >= 200 && status.id < 300) {
                skycons.add("icon", Skycons.THUNDER_RAIN);
                body.style.backgroundImage = 'url("storm.jpg")'
            } else if (status.id >= 300 && status.id < 500) {
                skycons.add("icon", Skycons.RAIN);
                body.style.backgroundImage = 'url("rain.jpg")'
            } else if (status.id >= 500 && status.id < 600) {
                skycons.add("icon", Skycons.RAIN);
                body.style.backgroundImage = 'url("rain.jpg")'
            } else if (status.id >= 600 && status.id < 700) {
                skycons.add("icon", Skycons.SNOW);
                body.style.backgroundImage = 'url("snow.jpg")'
            } else if (status.id >= 700 && status.id < 800) {
                skycons.add("icon", Skycons.FOG);
                body.style.backgroundImage = 'url("fog.jpg")'
            } else if (status.id === 800) {
                skycons.add("icon", Skycons.CLEAR_DAY);
                body.style.backgroundImage = 'url("sun.jpg")'
            } else if (status.id > 800 && status.id < 900) {
                skycons.add("icon", Skycons.CLOUDY);
                body.style.backgroundImage = 'url("clouds.jpg")'
            };

        })
        .catch(() => 
            warning.textContent = 'Enter correct city name'
        );
    skycons.play();
};


const enter = () => {
    if (event.keyCode === 13) {
        getApi();
    }
};

getApi();
button.addEventListener('click', getApi);
input.addEventListener('keyup', enter);