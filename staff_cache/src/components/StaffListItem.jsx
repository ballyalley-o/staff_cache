import React from 'react'
import PropTypes from 'prop-types'
import { removeStaff } from '../store'
import { toast } from 'react-toastify'
import useThunk from '../hooks/use-thunk/useThunk'
import { BsTrashFill } from 'react-icons/bs'
import Button from './Button'

StaffListItem.propTypes = {
  staff: PropTypes.object.isRequired,
}
function StaffListItem({ staff }) {
  const [deleteStaff, isLoading, error] = useThunk(removeStaff)

  const handleRemove = () => {
    deleteStaff(staff)
  }

  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 justify-between items-center cursor-pointer'>
        <div className='flex flex-row items-center justify-between gap-5 items-center'>
          <Button loading={isLoading} onClick={handleRemove}>
            <BsTrashFill />
          </Button>
          {error && <div>{toast.error(error.message)}</div>}
          <h1 className='text-2xl'>{staff.name}</h1>
        </div>
      </div>
    </div>
  )
}

export default StaffListItem
