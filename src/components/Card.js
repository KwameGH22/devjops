import React from 'react'

const Card = ({postdate}, {contract}, {position}, {company}, {location}, {id}) => {
  return (
    <div>
        <span className='postdate'>{postdate}</span>
        <span className='contract'>{contract}</span>
        <div className='position'>{position}</div>
        <div className='company'>{company}</div>
        <div className='location'>{location}</div>
    </div>
  )
}

export default Card