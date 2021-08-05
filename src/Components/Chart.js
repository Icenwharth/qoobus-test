import React, { useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import { AnimateOnChange } from 'react-animation';
import './Chart.css';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function updateArray(array){
        for( var a =0; a!==5; a++) array[a]=getRandomInt(10,80); 
      }
  
  function Chart (){
      const [pressed, setPressed] = useState(false);
      var array = [];
      useEffect(() => {
          updateArray(array);
        setPressed(false);
    }, [pressed, array])
    
    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgb(141,10,218)',
            borderColor: 'rgb(0,0,0)',
            borderWidth: 2,
            data: array,
          }
        ]
      }
    return (
        <div >
            <AnimateOnChange
                durationOut='500'
            >
              <Line
                data={state}
                options={{
                    title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
              />
            </AnimateOnChange>
            <button className='new__data__button' onClick={() => setPressed(true)}>New Data!</button>
        </div>
    );
};

export default Chart;
