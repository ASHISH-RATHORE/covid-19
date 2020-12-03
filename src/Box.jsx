import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react';
import './Box.css';
import countup from 'react-countup';





function Box({title,cases,total,color}) {


    function test (labelValue) {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
    
        : Math.abs(Number(labelValue));
    
    }
        

    return (
        <div className="cards" >
            <Card className="card_cases"  >
            <CardContent className="content" >
                <Typography className="box_title" color="primary" >
                {title} <hr></hr>
                </Typography>
          <div className="show_cases">               
    
    <div> { (!total)?<div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>:test(total)}</div> 
      <div>{(!cases)?<div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>:test(cases)}<span className="badge badge-danger new">New</span></div>
         </div>
            </CardContent>
        </Card> </div>
        )
};;

export default Box;
