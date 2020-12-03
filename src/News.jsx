import React, { useEffect,useState,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import './News.css';
import axios from 'axios';
import Caro from './Caro';





function News() {




  const [response, setresponse] = useState([]);
//  console.log(response);

  useEffect(() => {

    const res= async()=>{

     try{

      const data= await axios.get('https://gnews.io/api/v4/top-headlines?q=coronavirus&lang=en&token=ea05a8e34e24685378756f99067ac968');
               setresponse(data.data.articles);

     }catch(err){
       console.log(err);
     }




    }
    res();
    
  },[])

  
    


  

    return (
       <Fragment>
      
      <Caro  res={response}/>
     
       </Fragment> 
        )
};

export default News;





