import React from 'react'

const SuccessfulLanding = ({setSuccessfulLanding}) => {
    return (
        <div>
            <button 
            className="btn"
            onClick={()=>setSuccessfulLanding(true)}>True</button>
            <button 
            className="btn"
            onClick={()=>setSuccessfulLanding(false)}>False</button>
            
        </div>
    )
}

export default SuccessfulLanding
