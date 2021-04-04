import React from 'react'
import LaunchYear from './LaunchYear'
import SuccessfulLanding from './SuccessfulLanding'
import SuccessfulLaunch from './SuccessfulLaunch'

const Filters = ({setLaunchYear,setSuccessfulLaunch,
      setSuccessfulLanding}) => {
    return (
        <div>
            <div>
                <h2 
      className="heading">SpaceX Launch Programs</h2>
            </div>
        <div className="filters">
            
           <div>
               <h3>Launch Year</h3>
               <hr className="underline"/>
                <LaunchYear setLaunchYear={setLaunchYear}
                />
           </div>
           
           <div>
               <h3>Successful Launch</h3>
               <hr className="underline"/>
                <SuccessfulLaunch setSuccessfulLaunch={setSuccessfulLaunch}/>
           </div>
            
           <div>
               <h3>Successful Landing</h3>
               <hr className="underline"/>
                <SuccessfulLanding
                setSuccessfulLanding={setSuccessfulLanding}/>
           </div>
        </div>
        </div>
    )
}

export default Filters
