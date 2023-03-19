import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { checkTask, editTask } from '../redux/listTask';

export default function Task({id,isDone,description}) {
    const [inputValue, setInputValue] = useState('');
    const dispatch=useDispatch()
  return (
    <div id={id}>
        <p style={{color:isDone?'green':'red'}}>{description}</p>
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <button onClick={dispatch(editTask({id:id,description:inputValue}))}>Edit Task</button>
        <button onClick={dispatch(checkTask({id:id}))}>check Task</button>
    </div>
  )
}

