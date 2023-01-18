import React from "react";
import {Input} from '../input'
import {CardList} from '../CardList'
import {SingleCity} from '../singleCity'
import {useCitiesList} from "../hooks/useCitiesList"
import {  Route,  Routes } from 'react-router-dom';
// import { Card } from "../card"

export const GlobalContext = React.createContext();
export const Main = ({}) => {
  const [state, dispatch] = useCitiesList();

  console.log('state', state)

    return (     
      <>
      <GlobalContext.Provider value={{state, dispatch}}>

          <Routes>
            <Route path="/weather/*" element={<Main /> }/>          
            <Route path={`city/:city`} element={<SingleCity state={state}/>}/>
        </Routes>   
      </GlobalContext.Provider>
      <div className='main'>
        <h1>Введите название города на русском языке</h1>
        <Input />
        {state.citiesList.length && <CardList/>} 
      </div>
      
      </>
    )
}