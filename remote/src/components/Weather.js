
import React, { useState } from 'react';
import useWeather from '../hooks/weather/useWeather';

import { Select, MenuItem } from '@mui/material'


function Weather () {  
    const [selectedLocation, setSelectedLocation] = useState('London');
    
    let { weather, loading } = useWeather(selectedLocation);  
    const setLocation = (event) => {
        setSelectedLocation(event.target.value);
    }
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Weather</h1>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedLocation}
                label="Location"
                onChange={setLocation}
            >
                <MenuItem value={'London'}>London</MenuItem>
                <MenuItem value={'Barcelona'}>Barcelona</MenuItem>
                <MenuItem value={'Madrid'}>Madrid</MenuItem>
            </Select>
                
            {
                loading && <div>Loading...</div>
            }
            {
                !loading && 
                <div>
                    Cº <h2>{weather?.current?.temp_c}</h2>
                </div>
            }
        </div>
    )
}



const styles = {
    title: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "bold",
      padding: "1rem",
      borderRadius: "5px",
    },
    subtitle: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "bold",
      padding: "1rem",
      borderRadius: "5px",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", 
    },
    card: {
      border: "1px solid black",
      margin: "1rem",
      borderRadius: "5px",
  
    }
  }

  export default Weather