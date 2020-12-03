import React,{Fragment} from 'react';
import { CircularProgressbar,buildStyles}from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




const Progress = ({title,cases,total}) => {

    
   

  
     var percentage;
    if((!total)){ 
      percentage=0.83
    }
    else{

        var percentage=((cases/total)*100).toFixed(2);
    
    }


 


    
    return (
       
     

  
        <Fragment>

         <div class="circular-progress">
           
           <CircularProgressbar value={percentage} text={`${percentage}%` } styles={buildStyles({
               pathTransitionDuration: 1.5,
               counterClockwise:'false',
                 rotation: 1,
               transition: 'stroke-dashoffset 1.5s ease 0s',
               transform: 'rotate(0.25turn)',
               path: {
                transition: 'stroke-dashoffset 0.5s ease 0s',
              }


           })} />
           <hr></hr>
                  <h6>{title}</h6>
                  </div>
                  </Fragment>
    )
}

export default Progress;
