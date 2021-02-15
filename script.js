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

