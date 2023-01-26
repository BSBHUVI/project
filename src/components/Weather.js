import React from 'react'
import Currentweather from './Currentweather';
import Search from './Search'
import {WEATHER_API_KEY,WEATHER_API_URL} from './api'
import { useState } from 'react';
import Forecast from './Forecast';

function Weather() {
  const [currentweather,setCurrentWeather]=useState(null)
  const [forecast,setForecast]=useState(null)
    const handleOnSearchChange=(searchData)=>{
       const [lat,lon]=searchData.value.split(" ")
     const currentweatherFetch=fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const  forecastFetch=fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
  Promise.all([currentweatherFetch,forecastFetch]).then(async(response)=>{
    const weatherResponse=await response[0].json();
    const forecastResponse=await response[1].json();
    setCurrentWeather({city:searchData.label,...weatherResponse})
    setForecast({city:searchData.label,...forecastResponse})

  }).catch((err)=>console.log(err))

  }
   
  return (
    <div className='conta' style={{marginTop:"4rem"}}>
    <Search onSearchChange={handleOnSearchChange}/>
    
     {currentweather && <Currentweather data={currentweather}/>}
    {forecast && <Forecast data={forecast}/>}
    </div>
  )
}

export default Weather
