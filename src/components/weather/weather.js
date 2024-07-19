import axios from "axios";
import { useEffect,useState } from "react";

const Weather = () => {
    const [countryData,setcountryData]=useState([])
    useEffect(()=>{
      axios.get("https://restcountries.com/v3.1/all").then(response=>setcountryData(response.data))
    },[])

    const mycountry = () => {
        countryData.map((items)=>{
            return console.log(items.name.common)
        })
    }
    mycountry()

  return (
    <div>
       <h3>Country listing</h3>
       {
        
       }
    </div>
)
}
export default Weather;




