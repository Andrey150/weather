import React, { useRef, useContext } from 'react';
import {GlobalContext} from '../App';
import'../App.css';

export const Input = () => {
  const inputRef = useRef('');
  const { dispatch, state: { inputValue, editingCity } } = useContext(GlobalContext)

  const handleOnAdd = () => {
    if (inputValue.length) {
      dispatch ({
        type: "ADD_CITY",
        payload: inputValue
      })
      dispatch ({
        type: "RESET_INPUT_VALUE",
      })
    }

    inputRef.current.focus();
  }

  const handleOnDone = () => {
    if (inputValue.length) {
      dispatch({
        type: "EDIT_CITY_DONE",
        payload: inputValue
      })
      dispatch({
        type: "RESET_INPUT_VALUE",
      })
    }
    inputRef.current.focus();
  }

  const handleOnChange = (event) => {
    dispatch ({
      type: "CHANGE_INPUT_VALUE",
      payload: event.target.value
    })
  }


  return (
    <div className='inputWrap'>
      <input className='input' onChange={handleOnChange} value={inputValue} ref={inputRef}/>
      {
        editingCity ?
          <button className="inputButton" onClick={handleOnDone}>Done</button>
        :
          <button className="inputButton" onClick={handleOnAdd}>+</button>
      }
    </div>
  )
}