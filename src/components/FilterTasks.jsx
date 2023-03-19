import React from 'react'
import { useDispatch } from 'react-redux'
import { filterList } from '../redux/filterTask'
import { useSelector } from 'react-redux' 
import { useState } from 'react'
export default function FilterTasks() {
    const dispatch=useDispatch()
    const originalList=useSelector(state=>state.originalList)
    const [inputValue, setInputValue] = useState('')
    const handleClick=()=>dispatch(filterList({originalList:originalList,isDone:inputValue}))

  return (
    <div>
        <input type="text" value={inputValue} placeholder='write Done/Not Done/All' onChange={(event) => setInputValue(event.target.value)} />
        <button onClick={handleClick}>filter your tasks</button>
        {console.log(useSelector(state=>state.filteredList))}
    </div>
  )
}
