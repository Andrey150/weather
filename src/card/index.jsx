import React, {memo, useContext} from 'react'
import '../App.css'
import { useWeather } from '../hooks/useWeather'
import {GlobalContext} from "../App";
import { Link } from 'react-router-dom';

const CardNoMemo = ({city}) => {

    const { dispatch } = useContext(GlobalContext)

    const [data] = useWeather(city);
    if (!data) return null

    const {name, weather, main} = data;
    const {description, icon} = weather[0]
    const {temp, humidity, feels_like, sunrise, sunset} = main

    const handleOnDelete = () => {
        dispatch ({
            type: "DELETE_CITY",
            payload: city,
        })
    }

    const handleOnEdit = () => {
        dispatch ({
            type: "EDIT_CITY",
            payload: city,
        })
    }

    return (
        <Link to={`city/${city}`} className='card'>        
            <div className="actionButtonWrap">
                <button className="actionButton" onClick={handleOnEdit}>edit</button>
                <button className="actionButton" onClick={handleOnDelete}>X</button>
            </div>
            <div className='mainInfo'>
                <img className="icon" src={`https://openweathermap.org/img/wn/${icon}.png`} alt="icon" />
                <div className='title'>{name}</div>
                <div className='description'>{description}</div>
                <div className='temperature'>{temp.toFixed()}</div>
            </div>
            <div className='information'>
                <div className=''>Humidity: {humidity}</div>
                <div className=''>Feels like: {feels_like}</div>
                <div className=''>Sunrise: {sunrise}</div>
                <div className=''>Sunset: {sunset}</div>
            </div>
        </Link>
    )
};

export const Card = memo(CardNoMemo);