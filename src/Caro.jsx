import React, { Fragment,useState } from 'react';
import './Caro.css'


function Caro({res}) {
    

   //  console.log(res);
    




    return (
       <Fragment>
                    
                    <h4 class="highlights">Trending articles </h4>
                    <div className="sheet">
                   
        {res.map((articles,key)=>{
           return( 

            <div className="card" style={{width: '18rem',height:'500px',marginBottom:'-100px',marginLeft:'220px'}}>
            <img src={articles.image} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">{articles.source.name}</h5>
              <p className="card-text">{articles.title}</p>
               <a href={articles.url} target="_blank">Read More</a>
            </div>
          </div>
              

              
            
           
             
              );
       })}
       
     

          </div>
       </Fragment>
    )
}

export default Caro
