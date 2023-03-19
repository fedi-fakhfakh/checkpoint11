import { createSlice } from '@reduxjs/toolkit';


export const listTaskSlice = createSlice({
  name: 'listTask',
  initialState: [],
  reducers: {
    addObject: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      state=state.map(el=>el.id==action.payload.id?el.description=action.payload.description:el);
    },
    checkTask: (state, action) => {
        state=state.map(el=>el.id==action.payload.id?!el.isDone:el);
    }
  },
});

export const { addObject, editTask, checkTask } = listTaskSlice.actions;

export default listTaskSlice.reducer;
