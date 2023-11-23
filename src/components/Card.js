import React from 'react';
// import Data from "./data/data.json";
import CardItems from './CardItems';



const Card = () => {
  return (
    <div className='cardContainer'>
        {
          Data.map(dataItems, key) => {
            return (
              <CardItems 
                key={dataItems.id}
                company={dataItems.company}
                position={dataItems.position}
                postedAt={dataItems.postedAt}
                contract={dataItems.contract}
                location={dataItems.location}
              />
            )
          }
        }
    </div> 
    )
}
           


export default Card