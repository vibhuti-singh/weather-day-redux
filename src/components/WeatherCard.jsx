

import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import SevenDay from './SevenDay';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, searchWeather } from '../features/weatherSlice';

function WeatherCard() {
  const dispatch = useDispatch();

  const { weather, isLoading } = useSelector((state) => state.weather);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      dispatch(searchWeather(search));
    } else {
      dispatch(fetchWeather());
    }
  }, [dispatch, search]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!weather || !weather.forecast?.forecastday) {
    return (
      <Typography variant="h1" color="black" sx={{ marginTop: '5%', display:"flex", alignItems:"center", justifyContent:"center"}}>
        Search your city...
      </Typography>
    );
  }

  return (
    <>
      <Box className="card-box" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
        <Card sx={{ width: '35%', marginTop:"5%" }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                {weather.location.name}
              </Typography>
              <Typography variant="body1">{weather.location.localtime}</Typography>
            </Box>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
              {weather.current.temp_c}°C
            </Typography>
            <Typography variant="h5" color="black" sx={{ marginTop: '5px' }}>
              {weather.current.temp_f}°F
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" color="black" sx={{ marginTop: '10px' }}>
                Weather: {weather.current.condition?.text}
              </Typography>
              <img sx={{ width: '10px', height: '10px' }} src={weather.current.condition?.icon} alt="icon" />
            </Box>
          </CardContent>
        </Card>

        {/* seven day forecast */}
        <SevenDay sevenDayData={weather.forecast.forecastday} />
      </Box>
    </>
  );
}

export default WeatherCard;

