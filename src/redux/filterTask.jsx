import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux'


export const filterTasksSlice = createSlice({
  name: 'listTask',
  initialState: [],
  reducers: {
    filterList: (state, action) => {
      action.payload.isDone == 'Done'?state= action.payload.originalList.filter(el=>el.isDone==true): action.payload.isDone == 'Not Done'?state= action.payload.originalList.filter(el=>el.isDone==false):state=action.payload.originalList
    }
  }
});

export const { filterList } = filterTasksSlice.actions;

export default filterTasksSlice.reducer;
