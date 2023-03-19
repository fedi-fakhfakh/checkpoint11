import React from 'react'
import { useDispatch } from 'react-redux'
import { addObject } from '../redux/listTask'
import { useState } from 'react'
export default function AddComponent() {
    const [inputValue, setInputValue] = useState('')
    const dispatch=useDispatch()
    const handleClick=()=>dispatch(addObject({id:Date.now(),description:inputValue,isDone:false}))
  return (
    <div>
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <button onClick={handleClick}>add Task</button>
    </div>
  )
}
