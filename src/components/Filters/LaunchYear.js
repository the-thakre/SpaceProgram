import React from 'react'
import {years} from '../../data';
import Button from '../../ui/Button';
import {Link} from 'react-router-dom';

const LaunchYear = ({setLaunchYear}) => {
    return (
        <div>
            {years.map((year,index)=>{
                return <Link key={index} to={`/${year}`}><Button text={year} clicked={setLaunchYear}/></Link>
            })}
        </div>
    )
}

export default LaunchYear
