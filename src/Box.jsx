import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react';
import './Box.css';
import countup from 'react-countup';





function Box({title,cases,total,color}) {


    function test (labelValue) {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? Math.abs(Number(labelValue)) / 1.0e+6 + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? Math.abs(Number(labelValue)) / 1.0e+3 + "K"
    
        : Math.abs(Number(labelValue));
    
    }
        

    return (
        <div className="cards" ><Card >
            <CardContent className="content" >
                <Typography className="box_title" color="primary">
                {title} 
                </Typography>
               <h2 className="box_cases"><h6>Today's Cases</h6><h5>{test(cases)}</h5> </h2> 
                <Typography className="box_total"><h6>Total Cases</h6> {test(total)} </Typography>
            </CardContent>
        </Card> </div>
        )
};;

export default Box;
