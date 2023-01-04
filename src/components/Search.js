import React, { useState } from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
import {GEO_API_URL,geoApiOptions} from './api'
function Search({onSearchChange}) {
    const [search,setSearch]=useState(null)
  const handlesearch=(searchData)=>{
    setSearch(searchData)
    onSearchChange(searchData)
  }
  const loadOptions=(inputValue)=>{
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
	.then(response => response.json())
	.then(response => {return {
    options:response.data.map((city)=>{
      return {
        value:`${city.latitude} ${city.longitude}`,
        label:`${city.name},${city.countryCode}`,
      }
    })
  }})
	.catch(err => console.error(err));

  }
    return (
    <div style={{marginLeft:"3rem",marginRight:"3rem"}} >
    <AsyncPaginate placeholder="search for city" debounceTimeout={600}
        value={search} onChange={handlesearch}
    loadOptions={loadOptions} />
    
      
    </div>
  )
}

export default Search
