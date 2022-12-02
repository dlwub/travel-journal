import React from 'react'
import icon from '../images/map-icon.png'

function Destination(props){
  return(
    <div className="main-container">
      <img src={props.imageUrl} alt="destination place" 
            className="destination-pic"/>
      <div className="detail-container">
        <div className="location-detail">
          <img src={icon} alt="Map icon" className='map-icon'/>
          <span className="location">{props.location.toUpperCase()}</span>
          <span className="map-link">View on Google Maps</span>
        </div>
        <h3 className="title">{props.title}</h3>
        <span className="time-range">{props.startDate} - {props.endDate}</span>
        <span className='description'>{props.description}</span>
      </div>
    </div>
  )
}

export default Destination