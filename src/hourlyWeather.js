import React, {useState} from 'react';
import axios from 'axios';

const HourlyWeather = (weathers) => {
    const [data, setData]=useState({});
    const [latitude, setLatitude]=useState('');
    const [longitude, setLongitude]=useState('')
   
    const url=`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m`
    
    const searchLocation = (e) =>{

        // eslint-disable-next-line no-restricted-globals
        if(e.key ==="Enter"){
            axios.get(url)
            .then((response)=>{
                setData(response.data);
                console.log(response.data);
            })
            setLatitude('')
            setLongitude('')
        }
        
      
    }
    return (  
        <div className='container'>
            <div class="row align-items-center py-2">
                <div class="input-group search-box col-sm">
                    <span class="input-group-text" id="basic-addon1">Latitude</span>
                        <input type="text" 
                        class="form-control" 
                        inputmode="numeric" 
                        id="latitude" 
                        placeholder="latitude"
                        value={latitude} 
                        onChange={e => setLatitude(e.target.value)} 
                        onKeyPress={searchLocation}
                        />
                </div>
                <div class="input-group search-box col-sm">
                    <span class="input-group-text" id="basic-addon1">Longitude</span>
                        <input type="text" 
                        class="form-control" 
                        inputmode="numeric" 
                        id="longitude" 
                        placeholder="longitude"
                        value={longitude} 
                        onChange={e => setLongitude(e.target.value)} 
                        onKeyPress={searchLocation}
                        />
                </div>
                <div class="row align-items-center py-2">

                <div class="card weather-box">
          <table class="table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Temperature_2m</th>
                <th>Relativehumidity_2m</th>
                <th>Cloudcover_mid</th>
                <th>Windspeed_120m</th>
                
              </tr>
            </thead>
            {weathers.map((weather)=>
                    <tbody key={weather.id}>
                    <tr>
                  
                      <td>{weather.data.hourly ? <p>{weather.data.hourly.time}</p> :null}</td>
                      <td>{weather.data.hourly ? <p>{weather.data.hourly.temperature_2m} °C</p>:null}</td>
                      <td>{weather.data.hourly ? <p>{weather.data.hourly.relativehumidity_2m} %</p>:null}</td>
                      <td>{weather.data.hourly ? <p>{weather.data.hourly.cloudcover_mid} °C</p>:null}</td>
                      <td>{weather.data.hourly ? <p>{weather.data.hourly.windspeed_120m} ms</p>:null}</td>
                    </tr>
                    
                  </tbody>
                )}
           
        </table>
        </div>
            {/* <div className="top">
                <div className="location">
                    <p>{data.latitude}</p>
                    <p>{data.longitude}</p>
                </div>
                <div className="temp">
                     {data.hourly ? <h1>{data.hourly.temperature_2m} °C</h1>:null}
                
                </div>
                <div className="description">
                    {data.hourly ? <p>{data.hourly.time}</p> :null}
                    
                </div>
            </div> */}
                </div>
            </div>
            
            
            
        </div>
    );
}
 
export default HourlyWeather;