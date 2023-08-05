import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { PATH } from '../../config/config'
import { THUNK_TYPE } from '../../constants'

const addStaff = createAsyncThunk(THUNK_TYPE.ADD, async () => {
  const response = await axios.post(PATH.STAFF, {
    name: faker.name.fullName(),
  })
  return response.data
})

export { addStaff }
