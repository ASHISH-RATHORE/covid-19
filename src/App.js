import React,{useState,useEffect} from 'react';
import Box from './Box';
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import { CardContent, FormControl,MenuItem,Select } from '@material-ui/core';
import './App.css';
import News from './News';



function App() {

  const [countries, setcountries] = useState([]);
  const [country, setcountry]= useState("WorldWide");
  const [countryInfo,setCountryInfo]= useState({});
  const [indianstates, setIndianstates]=useState([]);
  const  [mapCenter, setMapCenter] = useState({lat:32.349032,lng:24.498656});
  const  [mapZoom, setMapZoom] = useState(3);
  
  ////------------------ fetch data from india specifi api----------------------------------------------------

 useEffect(() => {

  const getApi= async()=>{
    await fetch("https://disease.sh/v3/covid-19/gov/India").then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      const mapped= data.states.map((states)=>({
        sname:states.state,
        
      }));
      setIndianstates(mapped);
    });
  };
   getApi();
   console.log(getApi);
 },[]);

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
   console.log(countryCode);
   setcountry(countryCode);

   const url= countryCode==='WorldWide' ? 'https://disease.sh/v3/covid-19/all'
   :`https://disease.sh/v3/covid-19/countries/${countryCode}`
 
    await fetch(url).then((response)=>response.json())
    .then((data)=>{
      setcountry(countryCode);
      setCountryInfo(data);

      setMapCenter([data.countryInfo.lat,data.countryInfo.long]);
      console.log(data.countryInfo );
      setMapZoom(6);

    });
  };

  console.log(countryInfo);
 

  return(
    <div className="app">

      <div className="app_left">

      <div className="app_header">
        
      <h1>COVID-19 TRACKER</h1>
{/*1---header */}
      <FormControl className="app_dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country}>
          <MenuItem value="WorldWide">WorldWide</MenuItem>
        {countries.map((country)=>(
          <MenuItem value={country.value}>{country.name}</MenuItem>
        ))}         

        </Select>
      </FormControl>

      
      </div>

      
      

      <div className="app_stats">

        <Box title="CoronaVirus Cases " cases={countryInfo.todayCases} total={countryInfo.cases} />
        <Box title="Recovered  " cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
        <Box title="Death  " cases={countryInfo.todayDeaths} total={countryInfo.deaths}  />

        
      </div>

       
        
        
        
        
        <div className="app_mid_section">
        <div className="mapping"><Map center={mapCenter} zoom={mapZoom}/></div>
        
      </div>

      
      
        

      <section>
          
        </section>
        
        
        </div>
      </div>
    
  );
}

export default App;
