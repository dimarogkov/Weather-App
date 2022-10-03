import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

const key = '9c79f86c55689acf36da3a43655f005d';
const getWeather = (data) => axios.get(`/weather?q=${data}&units=metric&appid=${key}`);

export default {
    getWeather,
};
