import React from 'react'
import LaunchYear from '../Filters/LaunchYear'

const Program = ({img,missionName,flightNumber,missionIds,launchSuccess,launchYear,landingSuccess}) => {
    return (
        <div className="program">
            
            <img className="img" src={img} alt="space"/>
            <div className="title">
                <h2>{missionName} #{flightNumber}</h2>
                
            </div>
            <div className="info">
                <div className="missionid">
              <strong>Mission IDs : </strong> 
              {missionIds.length ===0 ? "None" :
                 missionIds.map((id,index)=>{
                     return <li key={index}>{id}</li>
                 })
              }
            </div>
            <div>
                <strong>
                    Launch Year</strong> : {launchYear}
            </div>
            <div>
                <strong>Successful Launch</strong> : {launchSuccess
                ? "Yes" : "No"}
            </div>
            <div>
                <strong>Successful Landing</strong> : {landingSuccess ? "Yes" : "No"}
            </div>
            </div>
        </div>
    )
}

export default Program
