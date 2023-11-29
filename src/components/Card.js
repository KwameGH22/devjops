import React from 'react';
import Data from "./data/data.json";
import CardItems from './CardItems';



const Card = () => {
  return (
    <div className='cardContainer'>
        {
          Data.map((dataItems, key) => {
            return 
              <CardItems dataItems={dataItems}/>
          }  
        )
      }
    )
  }
    </div> 
    )
}
           


export default Card