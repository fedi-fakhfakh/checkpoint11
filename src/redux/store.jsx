import { configureStore } from '@reduxjs/toolkit';
import listTaskReducer from './listTask';
import filterTasksReducer from './filterTask'
const store = configureStore({
  reducer: {
    originalList:listTaskReducer,
    filteredList:filterTasksReducer
}
});

export default store;
