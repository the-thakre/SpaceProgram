import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import Filters from './components/Filters/Filters';
import SpacePrograms from './components/spacePrograms/SpacePrograms';
import Spinner from './ui/Spinner';

const App = () => {
  // usestate hook used for storing and manipulating state for launch year,launch status,landing status, programs information and loading status 
  const [launchYear,setLaunchYear]=useState();
  const [successfulLaunch,setSuccessfulLaunch]=useState(true);
  const [successfulLanding,setSuccessfulLanding]=useState(true);
  const [programs,setPrograms]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  
  //first useffect which will get executed only once in the begining for fetching the data for all programs
  useEffect(()=>{
    setIsLoading(true);
    axios.get("https://api.spacexdata.com/v3/launches?limit=100").then(response=>{
      setIsLoading(false);
     setPrograms(response.data);
    });
  },[])

  //useffect for fetching the data as the state variable changes
  useEffect(() => {
    setIsLoading(true);
    axios.get("https://api.spacexdata.com/v3/launches?limit=100&launch_success="+successfulLaunch+"&land_success="+successfulLanding+"&launch_year="+launchYear).then(response=>{
      setIsLoading(false);
      const newPrograms=response.data;
      setPrograms(newPrograms);
    });
  }, [launchYear,successfulLaunch,successfulLanding])


  return (
    <div>
      <div> 
        {/* filters components for looking  */}
          <Filters 
          setSuccessfulLaunch={setSuccessfulLaunch}
          setSuccessfulLanding={setSuccessfulLanding}
          setLaunchYear={setLaunchYear}
          />
      </div>
      
      <div>
        {/* routes for home page and for rendered programs for each year */}
        {isLoading ? <Spinner/> : (<div>
          <Route 
          path='/:year' 
          component={()=>
            <SpacePrograms 
            programs={programs} 
            successfulLaunch={successfulLaunch}
            successfulLanding={successfulLaunch}
            />
            }>

          </Route>
          <Route 
          exact 
          path='/' 
          component={()=>
            <SpacePrograms 
              programs={programs} 
              successfulLaunch={successfulLaunch}
              successfulLanding={successfulLaunch}
            />
            }>
          </Route>

        </div>
        )}
      </div>
    </div>
  )
}

export default App;
