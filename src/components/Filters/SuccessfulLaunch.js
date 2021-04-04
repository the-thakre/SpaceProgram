import React from 'react'

const SuccessfulLaunch = ({setSuccessfulLaunch}) => {
    return (
        <div>
            <button 
            className="btn"
            onClick={()=>setSuccessfulLaunch(true)}>True</button>
            <button 
            className="btn"
            onClick={()=>setSuccessfulLaunch(false)}>False</button>
        </div>
    )
}

export default SuccessfulLaunch
