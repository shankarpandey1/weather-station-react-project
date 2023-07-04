// import { OPEN_WEATHER_API_TOKEN } from "./config";
// import { REACT_APP_OPEN_WEATHER_API_TOKEN } from 'dotenv';

const fetchCityWeatherInfo = async(city) => {
    
    // const appKey = process.env.REACT_APP_OPEN_WEATHER_API_TOKEN;
   
    try {
        const resultRaw = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_API_TOKEN}&q=${city}`
        );
        const result = await resultRaw.json();
        return result;
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error (e.g., show an error message to the user)
      }

}

export default fetchCityWeatherInfo;