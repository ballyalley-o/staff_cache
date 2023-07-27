import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStaff, addStaff } from '../store'
// hooks
import useThunk from '../hooks/use-thunk/useThunk'
// components
import Button from './Button.jsx'
import Loading from './Loading'
// assets
import { FaPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'
// utils
import pause from '../util/pause'
// constants
import { BUTTONS } from '../constants/staff'

function StaffList() {
  const { data } = useSelector((state) => state.staff)
  const [getStaff, isLoadingStaff, loadingStaffError] = useThunk(fetchStaff)
  const [createStaff, isCreateStaff, createStaffError] = useThunk(addStaff)

  useEffect(() => {
    getStaff()
  }, [getStaff])

  const handleAddStaff = () => {
    createStaff()
  }

  const renderedStaff = data.map((staff) => {
    return (
      <div key={staff.id} className='mb-2 border rounded'>
        <div className='flex p-2 justify-between items-center cursor-pointer'>
          <h1 className='text-2xl'>{staff.name}</h1>
        </div>
      </div>
    )
  })

  return (
    <div className='mt-2'>
      <div className='flex flex-row justify-between my-3'>
        <h1 className='text-8xl'>Staff</h1>

        <Button onClick={handleAddStaff} loading={isCreateStaff} primary>
          <FaPlus />
          {BUTTONS.ADD_STAFF}
        </Button>

        {createStaffError && <p className='text-red-500'>{createStaffError}</p>}
      </div>
      {renderedStaff}
    </div>
  )
}

export default StaffList
