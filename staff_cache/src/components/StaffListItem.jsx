import React from 'react'
import PropTypes from 'prop-types'
import { removeStaff } from '../store'
import { toast } from 'react-toastify'
import useThunk from '../hooks/use-thunk/useThunk'
import { BsTrashFill } from 'react-icons/bs'
import ExpandablePanel from './ExpandablePanel'
import AlbumsList from './Albums/AlbumsList'
import Button from './Button'

StaffListItem.propTypes = {
  staff: PropTypes.object.isRequired,
}
function StaffListItem({ staff }) {
  const [deleteStaff, isLoading, error] = useThunk(removeStaff)

  const handleRemove = () => {
    deleteStaff(staff)
    toast.success('Staff removed')
  }

  const header = (
    <>
      <Button loading={isLoading} onClick={handleRemove}>
        <BsTrashFill />
      </Button>
      {error && <div>{toast.error(error.message)}</div>}
      <h1 className='text-2xl'>{staff.name}</h1>
    </>
  )

  return (
    <ExpandablePanel header={header}>
      <AlbumsList staff={staff} />
    </ExpandablePanel>
  )
}

export default StaffListItem
