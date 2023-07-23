import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStaff, addStaff } from '../store'
import { toast } from 'react-toastify'
import Button from './Button.jsx'
import Loading from './Loading'
import { FaPlus } from 'react-icons/fa'
// constants
import { BUTTONS } from '../constants/staff'

function StaffList() {
  const dispatch = useDispatch()

  const { isLoading, data, error } = useSelector((state) => state.staff)

  error && toast.error(error.message)

  useEffect(() => {
    dispatch(fetchStaff())
  }, [dispatch])

  const handleAddStaff = () => {
    dispatch(addStaff())
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
      <div className='flex flex-row justify-between m-3'>
        <h1 className='text-8xl'>Staff</h1>
        <Button onClick={handleAddStaff}>
          <FaPlus />
          &nbsp;
          {BUTTONS.ADD_STAFF}
        </Button>
      </div>
      <div>{isLoading && <Loading />}</div>
      {renderedStaff}
    </div>
  )
}

export default StaffList
