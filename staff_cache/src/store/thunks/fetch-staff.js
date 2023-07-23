import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { PATH } from '../../config/config'
import { THUNK_TYPE } from '../../constants/staff'

const fetchStaff = createAsyncThunk(THUNK_TYPE.FETCH, async () => {
  const response = await axios.get(PATH.STAFF)

  return response.data
})

export { fetchStaff }
