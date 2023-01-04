import './currentweather.css'
import React from 'react'
import image01d from '../icons/01d.png'
import image01n from '../icons/01n.png'
import image02d from '../icons/02d.png'
import image02n from '../icons/02n.png'
import image03d from '../icons/03d.png'
import image03n from '../icons/03n.png'
import image04d from '../icons/04d.png'
import image04n from '../icons/04n.png'
import image09d from '../icons/09d.png'
import image09n from '../icons/09n.png'
import image10d from '../icons/10d.png'
import image10n from '../icons/10n.png'
import image11d from '../icons/11d.png'
import image11n from '../icons/11n.png'
import image13d from '../icons/13d.png'
import image13n from '../icons/13n.png'
import image50d from '../icons/50d.png'
import image50n from '../icons/50n.png'
import imageunKnown from '../icons/unknown.png'
function Currentweather({data}) {
    
   const i= `image${data.weather[0].icon}`
   var res;
   
   switch(i){
    case "image01d":
        res=image01d
        break
        case "image01n":
       res=image01n
        break
        case "image02d":
        res=image02d
        break
        case "image02n":
       res=image02n
        break
        case "image03d":
       res=image03d
        break
        case "image03n":
       res=image03n
        break
        case "image04d":
        res=image04d
        break
        case "image04n":
       res=image04n
        break
        case "image09d":
        res=image09d
        break
        case "image10d":
      res=image10d
        break
        case "image10n":
       res=image10n
        break
        case "image09n":
       res=image09n
        break
        case "image11d":
        res=image11d
        break
        case "image11n":
     res=image11n
        break
        case "image13d":
      res=image13d
        break
        case "image13n":
      res=image13n
        break
        case "image50d":
      res=image50d
        break
        case "image50n":
      res=image50n
        break
        case "imageunKnown":
            res=imageunKnown
              break
    default:


   }
  return (
    <div className='weather'>
    <div className="top">
    <div>
        <p className='city'>{data.city}</p>
        <p className='weathet-description'>{data.weather[0].description}</p>
        </div>
   
    <img src={res} alt="weather" className='weather-icon' />
    </div> 
    <div className="bottom">
        <p className='temperature'>{Math.round(data.main.temp)}*C</p>
        <div className="details">
            <div className="parameter-row">
                <span  className="parameter-label top">Details  </span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-value">{Math.round(data.main.feels_like)}*C</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">wind</span>
                <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Pressure</span>
                <span className="parameter-value">{data.main.pressure}hpa</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Currentweather
