import React from 'react'
import SuccessfulLaunch from '../Filters/SuccessfulLaunch'
import Program from './Program'
const SpacePrograms = ({programs,successfulLaunch,successfulLanding}) => {
    console.log(programs)
    return (
        <div className="programs">
            {programs.map((program,index)=>
                 
                (<Program key={index} img={program.links.mission_patch_small} missionName={program.mission_name}
                flightNumber={program.flight_number}missionIds={program.mission_id}
                launchYear={program.launch_year}
                launchSuccess={successfulLaunch}
                landingSuccess={successfulLanding}/>)
            )}


        </div>
    )
}

export default SpacePrograms
