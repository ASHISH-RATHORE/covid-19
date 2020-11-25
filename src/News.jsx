import React, { useEffect,useState,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery/dist/jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './News.css';
import api,{params} from "./service/api";
import axios from "axios";
import Card from './Card';





function News() {

    const [trial, settrial] = useState();
    

    useEffect(() => {

      const getApi= async()=>{
        await fetch("http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cafa8a8552e04f6fa2d1ae1f5a324732").then((response)=>response.json())
        .then((data)=>{
          
          settrial(data);
        });
      };
       getApi();
       
     },[]);
    
     

  

    return (
       <Fragment>

        <Card article={trial}/>
         
       </Fragment> 
        )
};

export default News;





