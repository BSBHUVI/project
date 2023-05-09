import axios from "axios";
import { useEffect, useState } from "react";

function getAddressFromCoords(lat, lng) {
  const apiKey = "4fc1d5c7218d4d9f9481c8db4672c084";
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}&language=en&pretty=1`;

  return axios.get(url).then(response => {
    var { road, city, state, country } = response.data.results[0].components;
  var c=city===undefined?"":city+" -";
  var r=road==="unnamed road"?"":road+" -";
  var s=state===undefined?"":state+" -";
  var con=country===undefined?"":country;
    const address = `${r} ${c} ${s} ${con}`;
    return address;
  });
}
export default function MyComponent({latitude,longitude}) {
    const [lat, setLat] = useState(latitude);
    const [lng, setLng] = useState(longitude);
    const [address, setAddress] = useState("");
  
    useEffect(() => {
      getAddressFromCoords(lat, lng).then(result => {
        setAddress(result);
      });
    }, [lat, lng]);
  
    return <div>{address}</div>;
  }
  