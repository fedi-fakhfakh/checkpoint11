import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
export default function ListTask() {
    const Items=useSelector(state => state.filteredList)
  return (
    <div>
        {Items.map(el=><Task id={el.id} description={el.description} isDone={el.isDone} />)}
    </div>
  )
}
