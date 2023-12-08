import axios from "axios";

const getWeather =async(city)=>{
    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=ef48b3dcd7ca4027b1e134559233108&q=${city}&aqi=yes`)
   return response.data
}

const weatherService ={
    getWeather,
}
export default weatherService