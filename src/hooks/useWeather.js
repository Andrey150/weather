import React, {useEffect, useState} from 'react';
import {API_KEY} from '../settings'

export const useWeather = (city) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`)
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('Something went wrong');
        })
        .then(json => setData(json))
        .catch((error) => {
          console.log(error)
        })
    },[city])
  
  return [data]
}

