import React from 'react'

const CardItems = ({ 
        company,
        position,
        postedAt, 
        contract, 
        location
    }) => {
  return (
    <div className='cardItems'>
        <div></div>
        <span>{postedAt}</span>
        <span>{contract}</span>
        <div>{position}</div>
        <div>{company}</div>
        <div>{location}</div>
    </div>
  )
}

export default CardItems