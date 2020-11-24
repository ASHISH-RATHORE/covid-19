import React, { useEffect,useState,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery/dist/jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './News.css';
import api,{params} from "./service/api";
import axios from "axios";




function News() {

    const [trial, settrial] = useState('');
    console.log(trial.content+ "trail data here")



  useEffect(() => {
    const newss= async()=>{
      let response=window.fetch("https://gnews.io/api/v4/search?q=corona&token=1de06488bac8cb970d594a22e2437327&lang=en")
      .then((response)=>
        response.json()).then((data)=>{
        
        const art=data.articles.map((articles)=>({
           data:articles.articles,

        }));
        settrial(art);

      })


    }
    newss();
    
  }, []);

    return (
       <Fragment>

<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
             <h1></h1> 
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Third slide" />
          </div>
        </div>
      </div> 
         
       </Fragment> 
        )
};

export default News;


//96456c7737e84a18a8344d6d3f7cc1ab


