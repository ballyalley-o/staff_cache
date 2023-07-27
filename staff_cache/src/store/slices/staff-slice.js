import { createSlice } from '@reduxjs/toolkit'
import { fetchStaff, addStaff } from '../thunks'

const staffSlice = createSlice({
  name: 'staff',
  initialState: {
    data: [],
  },
  extraReducers(builder) {
    // fetch staff
    builder.addCase(fetchStaff.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchStaff.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchStaff.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
    // add staff
    builder.addCase(addStaff.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(addStaff.fulfilled, (state, action) => {
      state.isLoading = false
      state.data.push(action.payload)
    })
    builder.addCase(addStaff.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
  },
})

export const staffReducer = staffSlice.reducer
