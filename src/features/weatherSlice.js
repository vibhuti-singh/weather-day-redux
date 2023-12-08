import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherService from "./weatherService";

const initialState ={
    isLoading : false,
    issuccess : true,
    iserror : false,
    weather :{"location":{"name":"Indore","region":"Madhya Pradesh","country":"India","lat":22.72,"lon":75.83,"tz_id":"Asia/Kolkata","localtime_epoch":1701414705,"localtime":"2023-12-01 12:41"},"current":{"last_updated_epoch":1701414000,"last_updated":"2023-12-01 12:30","temp_c":24.6,"temp_f":76.3,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":7.2,"wind_kph":11.5,"wind_degree":138,"wind_dir":"SE","pressure_mb":1014.0,"pressure_in":29.94,"precip_mm":0.0,"precip_in":0.0,"humidity":66,"cloud":19,"feelslike_c":26.1,"feelslike_f":78.9,"vis_km":10.0,"vis_miles":6.0,"uv":6.0,"gust_mph":8.2,"gust_kph":13.2,"air_quality":{"co":660.9,"no2":9.3,"o3":86.6,"so2":9.9,"pm2_5":44.5,"pm10":47.8,"us-epa-index":3,"gb-defra-index":5}}}
}

const weatherSlice = createSlice({
    name :"weather",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
builder.addCase(fetchWeather.pending,(state)=>{
    state.isLoading=true
})
.addCase(fetchWeather.fulfilled,(state,action)=>{
    state.isLoading = false,
    state.weather=action.payload,
    state.issuccess = true
})
.addCase(fetchWeather.rejected, (state) => {
    state.isLoading = false;
    state.issuccess = false;
    state.iserror = true;
    state.weather = null;
  })
  .addCase(searchWeather.pending, (state) => {
    state.isLoading = true;
  })
  .addCase(searchWeather.fulfilled, (state, action) => {
    state.isLoading = false;
    state.weather = action.payload;
    state.issuccess = true;
  })
  .addCase(searchWeather.rejected, (state) => {
    state.isLoading = false;
    state.issuccess = false;
    state.iserror = true;
    state.weather = null;
  });
    }
})

export default weatherSlice.reducer

export const fetchWeather = createAsyncThunk("FETCH/WEATHER",async()=>{
    return await weatherService.getWeather()
})

export const searchWeather = createAsyncThunk("SEARCH/WEATHER", async (city) => {
    return await weatherService.getWeather(city);
  });
  

