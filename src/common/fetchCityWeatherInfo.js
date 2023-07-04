
const fetchCityWeatherInfo = async(city) => {
    
    const appKey = process.env.REACT_APP_OPEN_WEATHER_API_TOKEN;
   
    try {
        const resultRaw = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?appid=${appKey}&q=${city}`
        );
        const result = await resultRaw.json();
        return result;
      } catch (error) {
        console.error('Error fetching data:', error);
      }

}

export default fetchCityWeatherInfo;