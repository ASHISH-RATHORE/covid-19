import React,{useState,useEffect} from 'react';
import Box from './Box';
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from "@material-ui/core/TextField";
import 'bootstrap/dist/js/bootstrap.bundle.min';



import { CardContent, FormControl,MenuItem,Select } from '@material-ui/core';
import './App.css';
import Progress from './Progress';
import News from './News';




function App() {
  const [isloading,setIsloading]=useState(true);
  const [allpop,setallpop]=useState();
  const [countries, setcountries] = useState([]);
  const [country, setcountry]= useState("WorldWide");
  const [countryInfo,setCountryInfo]= useState({});
  const [data, setdata]=useState({iso3:'',flag:''});
  const  [mapCenter, setMapCenter] = useState({lat:32.349032,lng:24.498656});
  const  [mapZoom, setMapZoom] = useState(1);





  


  useEffect(()=>{
    fetch('https://disease.sh/v3/covid-19/all').then((response)=>response.json()).then((data)=>{
      setCountryInfo(data);
      
    });
  },[]);
  
  // const getCountriesData=async()=>{
  //   await fetch("https://disease.sh/v3/covid-19/countries").then((response)=>response.json())
  //   .then((data)=> {
  //     const countries=data.map((country)=>({
  //       name:country.country,
  //       value:country.countryInfo.iso3,
  //     }));
  //     setcountries(countries);
  //   });
  // };

  useEffect(() => {
    const getCountriesData=async()=>{
      await fetch("https://disease.sh/v3/covid-19/countries").then((response)=>response.json())
      .then((data)=> {
        const countries=data.map((country)=>({
          name:country.country,
          value:country.countryInfo.iso3,
        }));
        setcountries(countries);
        setIsloading(false);
      });
    };
    
    getCountriesData();
  }, []);



 const onCountryChange= async (e)=>{
   const countryCode= e.target.value;
   
   setcountry(countryCode);
    setIsloading(true);
   const url= countryCode==='WorldWide' ? 'https://disease.sh/v3/covid-19/all'
   :`https://disease.sh/v3/covid-19/countries/${countryCode}`
 
    await fetch(url).then((response)=>response.json())
    .then((data)=>{
      data.flag = "../public/earth.png";
      setcountry(countryCode);
      setCountryInfo(data);
      setIsloading(false);
      setallpop(data.population);
      
      
     

      
      if(countryCode==='WorldWide'){
        setMapCenter({lat:32.349032,lng:24.498656});
        setdata({iso3:global,flag:process.env.PUBLIC_URL+"/earth.png"});
        
      }else{
        setMapCenter([data.countryInfo.lat,data.countryInfo.long])
        setdata([data.countryInfo.iso3,data.countryInfo.flag]);
        
      
      }
      /////
      
      setMapZoom(19);

    });
  };

  
//  

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
      
        <Select variant="standard" onChange={onCountryChange} value={country}>
          <MenuItem className="menu"   value="WorldWide">WorldWide</MenuItem>
        {countries.map((country)=>(
          <MenuItem className="menu"  id={country.name} value={country.value}>{country.name}</MenuItem>
        ))}         

        </Select>
      </FormControl>

      
      </div>

      



<div className="app_stats">

<Box  title="CoronaVirus Cases " cases={countryInfo.todayCases} total={countryInfo.cases} loading={isloading}/>
<Box  title="Recovered Cases" cases={countryInfo.todayRecovered} total={countryInfo.recovered} loading={isloading} />
<Box  title="Fatal Cases " cases={countryInfo.todayDeaths} total={countryInfo.deaths} loading={isloading} />
</div>

<div className="circular"> 

<div><Progress title="Population Affected" cases={countryInfo.cases} total={allpop} /></div>
<div><Progress title="Recovery Rate" cases={countryInfo.recovered} total={countryInfo.cases}/></div>
 
 
 
 
 </div>
       
      
       
        
        
        
        
        <div className="app_mid_section">

          <div className="col-md-6">
            <div className="mapping">
              <Map active={countryInfo.active} newdata={data}center={mapCenter} zoom={mapZoom}/>
              </div>
              </div>

              <div className="col-md-6">
                <News/>
              
              </div>
         
         
      </div>

      
      
        

      <section>
          
        </section>
        
        
        </div>
      </div>
    
  );
}

export default App;
