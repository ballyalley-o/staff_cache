import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStaff, addStaff } from '../store'
import { toast } from 'react-toastify'
import Button from './Button.jsx'
import Loading from './Loading'
import { FaPlus } from 'react-icons/fa'
// constants
import { BUTTONS, SNACKS } from '../constants/staff'

function StaffList() {
  const [isLoadingStaff, setIsLoadingStaff] = useState(false)
  const [loadingStaffErr, setLoadingStaffErr] = useState(null)
  const [isCreateStaff, setIsCreateStaff] = useState(false)
  const [createErrStaff, setCreateErrStaff] = useState(null)

  const { data } = useSelector((state) => state.staff)

  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoadingStaff(true)
    dispatch(fetchStaff())
      .unwrap()
      .catch((err) => setCreateErrStaff(toast.error(err.message)))
      .finally(() => setIsCreateStaff(false))
  }, [dispatch])

  const handleAddStaff = () => {
    setIsLoadingStaff(true)
    dispatch(addStaff())
      .unwrap()
      .then(() => toast.success(SNACKS.STAFF_ADDED))
      .catch((err) => toast.error(err.message))
      .finally(() => setIsLoadingStaff(false))
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
        {isCreateStaff ? (
          <h1 classNames='text-2xl'>Creating User</h1>
        ) : (
          <Button onClick={handleAddStaff} disabled={isLoadingStaff} primary>
            {isLoadingStaff ? (
              <Loading isButton />
            ) : (
              <>
                <FaPlus />
                &nbsp;
                {BUTTONS.ADD_STAFF}
              </>
            )}
          </Button>
        )}
        {createErrStaff && <p className='text-red-500'>{createErrStaff}</p>}
      </div>
      <div>{isLoadingStaff && <Loading />}</div>
      {renderedStaff}
    </div>
  )
}

export default StaffList
