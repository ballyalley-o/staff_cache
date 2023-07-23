import { configureStore } from '@reduxjs/toolkit'
import { staffReducer } from './slices/staff-slice'

export const store = configureStore({
  reducer: {
    staff: staffReducer,
  },
})

export * from './thunks'
