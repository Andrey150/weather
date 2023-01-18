import React from 'react'
import {Card} from '../card'
import { useParams } from 'react-router-dom'

import '../App.css'

export const SingleCity = (props) => {
    console.log(props)
    // console.log(data)
    const {data} = useParams()
    return (        
       <p>Карточка города </p>
    )
}
    
