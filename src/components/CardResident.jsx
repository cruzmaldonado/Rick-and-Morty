import React, { useEffect,useState } from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {

    const resident=useFetch(url)
    let color=""
    if(resident?.status=="Dead")
    color="red"
    else if(resident?.status=="Alive")
    color="green"
    else
    color="lightslategray"

    
    
  return (
    <article className='resident'>
        <header className='residentCard'>
            <img src={resident?.image} alt={`image of ${resident?.name}`} />
            
            <div className='status'>
            <div className='circle'style={{backgroundColor:`${color}`}}></div>
            <span className='circle__status'>{resident?.status}</span>
            </div>
        </header>
            <div>
                
                <ul>
                    <li><h3>{resident?.name}</h3></li>
                    <li><span>Specie: </span>{resident?.species}</li>
                    <li><span>Origin: </span>{resident?.origin.name}</li>
                    <li><span>Episodes where appear: </span>{resident?.episode.length}</li>
                </ul>
            </div>

    </article>
  )
}

export default CardResident