import React, {useState} from 'react';
import { BrowserRouter, Route,  Routes, Link } from 'react-router-dom';
import './App.css';

import {useCitiesList} from "./hooks/useCitiesList"
import {Main} from './main'

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();

  return (
      <BrowserRouter> 
      {/*<header>*/}
      {/*  <Link to='/'>Home</Link>*/}
      {/*  <Link to='/weather'>Weather</Link>*/}
      {/*</header>*/}
      <GlobalContext.Provider value={{state, dispatch}}>
      {console.log(dispatch) }
        <Routes>
          <Route path="/weather/*" element={<Main /> }/>
          <Route path="/*" element={<Main /> }/>
        </Routes>
      </GlobalContext.Provider>
      
      </BrowserRouter>
    
      
  );
}

export default App;
 