import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStaff, addStaff } from '../store'
// hooks
import useThunk from '../hooks/use-thunk/useThunk'
// components
import Button from './Button.jsx'
import Loading from './Loading'
import Skeleton from './Skeleton'
// assets
import { FaPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'
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

  let content

  if (isLoadingStaff) {
    content = <Skeleton custom='w-full h-10' times={6} />
  } else if (loadingStaffError) {
    content = <p className='text-red-500'>{loadingStaffError}</p>
  } else {
    content = data.map((staff) => {
      return (
        <div key={staff.id} className='mb-2 border rounded'>
          <div className='flex p-2 justify-between items-center cursor-pointer'>
            <h1 className='text-2xl'>{staff.name}</h1>
          </div>
        </div>
      )
    })
  }

  return (
    <div className='mt-2'>
      <div className='flex flex-row justify-between items-center my-3'>
        <h1 className='text-8xl'>Staff</h1>

        <Button onClick={handleAddStaff} loading={isCreateStaff} primary>
          <FaPlus />
          {BUTTONS.ADD_STAFF}
        </Button>

        {createStaffError && <p className='text-red-500'>{createStaffError}</p>}
      </div>
      {content}
    </div>
  )
}

export default StaffList
