import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { PATH } from '../../config/config'
import { THUNK_TYPE } from '../../constants/paths'

const removeStaff = createAsyncThunk(THUNK_TYPE.REMOVE, async (staff) => {
  await axios.delete(PATH.STAFF + '/' + staff.id)

  return staff
})

export { removeStaff }
