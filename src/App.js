import React,{useState,useEffect} from 'react';
import Box from './Box';
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from "axios";


import { CardContent, FormControl,MenuItem,Select } from '@material-ui/core';
import './App.css';




function App() {

  const [countries, setcountries] = useState([]);
  const [country, setcountry]= useState("WorldWide");
  const [countryInfo,setCountryInfo]= useState({});
  const [data, setdata]=useState({iso3:'',flag:''});
  const  [mapCenter, setMapCenter] = useState({lat:32.349032,lng:24.498656});
  const  [mapZoom, setMapZoom] = useState(1);
  
  console.log(countryInfo);
  


  
  ////------------------ fetch data from india specifi api----------------------------------------------------

//----------------------------------------------------------------------------------------------------------------


  useEffect(()=>{
    fetch('https://disease.sh/v3/covid-19/all').then((response)=>response.json()).then((data)=>{
      setCountryInfo(data);
    });
  },[]);
  


  useEffect(() => {
  
    const getCountriesData=async()=>{
      await fetch("https://disease.sh/v3/covid-19/countries").then((response)=>response.json())
      .then((data)=> {
        const countries=data.map((country)=>({
          name:country.country,
          value:country.countryInfo.iso3,
        }));
        setcountries(countries);
      });
    };
    getCountriesData();
  }, []);

 const onCountryChange= async (e)=>{
   const countryCode= e.target.value;
   
   setcountry(countryCode);

   const url= countryCode==='WorldWide' ? 'https://disease.sh/v3/covid-19/all'
   :`https://disease.sh/v3/covid-19/countries/${countryCode}`
 
    await fetch(url).then((response)=>response.json())
    .then((data)=>{
      setcountry(countryCode);
      setCountryInfo(data);

      setMapCenter([data.countryInfo.lat,data.countryInfo.long]);
      setdata([data.countryInfo.iso3,data.countryInfo.flag]);
      
      setMapZoom(19);

    });
  };

  
 

  return(

    
    <div className="app">

      <div className="app_left">

      <div className="app_header">
        
      <img src="girlmask.jpg" alt="mask" className="mask"/><h3 class="title">TRACKER
      
       {/* slider starts */}
         
       <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <h6>Maintain Social Distancing</h6>
             </div>
          <div className="carousel-item">
          <h6>Wash Your Hands</h6>
          </div>
          <div className="carousel-item">
            <h6>Please Wear a Mask</h6>

          </div>
          
        </div>
      </div>
        
        
      {/* slider ends */}
      </h3>
  
     

      <FormControl className="app_dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country}>
          <MenuItem className="menu" value="WorldWide">WorldWide</MenuItem>
        {countries.map((country)=>(
          <MenuItem className="menu" value={country.value}>{country.name}</MenuItem>
        ))}         

        </Select>
      </FormControl>

      
      </div>

      
      

      <div className="app_stats">

        <Box  title="CoronaVirus Cases " cases={countryInfo.todayCases} total={countryInfo.cases} />
        <Box  title="Recovered Cases" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
        <Box  title="Fatal Cases " cases={countryInfo.todayDeaths} total={countryInfo.deaths}  />

        
      </div>

       
        
        
        
        
        <div className="app_mid_section">

          <div className="col-md-12"><div className="mapping"><Map active={countryInfo.active} newdata={data}center={mapCenter} zoom={mapZoom}/></div></div>
         
         
      </div>

      
      
        

      <section>
          
        </section>
        
        
        </div>
      </div>
    
  );
}

export default App;
