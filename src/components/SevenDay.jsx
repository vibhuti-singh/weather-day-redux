import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const SevenDay = ({ sevenDayData }) => {
  return (
    <Box style={{width:"90%", display: 'flex', alignItems: 'center', flexDirection:"row" }}>
      {sevenDayData.map((day, index) => (
        <Card key={index} style={{ width: '100%', margin: '10px' }}>
          <CardContent sx={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
           
           
            {day.hour
              .filter((hour, hourIndex) => hourIndex % 4 === 0)
              .map((hour, hourIndex) => (
                <Box key={hourIndex} style={{ display: 'flex', flexDirection:"column", alignItems: 'center', marginTop: '10px' }}>
                  <Typography variant="body2" color="textSecondary">
                    {hour.time?.slice(-5)}
                  </Typography>
                  <Typography variant='body1'>
                    {hour.condition?.text}
                  </Typography>
                  <img sx={{ width: '10px', height: '10px' }} src={hour.condition?.icon} alt="icon" />
                  <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1 }}>
                    {`High ${hour.temp_c}°C, Low ${hour.temp_c}°C`}
                  </Typography>
                </Box>
              ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SevenDay;
