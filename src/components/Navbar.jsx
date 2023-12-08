import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { searchWeather } from "../features/weatherSlice"
import { Search } from '@mui/icons-material';


const Navbar = () => {
    const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    dispatch(searchWeather(searchQuery));
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <AppBar style={{backgroundColor:"#b3e5fc"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"black", font:"bold"}}>
          My Weather App
        </Typography>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <InputBase
          onChange={handleChange}
          variant="outlined"
        placeholder="Search city..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{color:"black" }}
          />
          <IconButton type="submit" aria-label="search"style={{color:"black"}} onClick={handleSearch} >
            <SearchIcon />
          </IconButton>
        </div>
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
