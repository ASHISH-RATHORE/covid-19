import React, { useEffect,useState,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery/dist/jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './News.css';




function News() {


  


    return (
       <Fragment>
         <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./stop.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="stop1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="stop3.png" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
       </Fragment> 
        )
};

export default News;


