import React from 'react'
import PropTypes from 'prop-types'
// styles
import { StyledStaffH1 } from '../../theme/styles'
// hooks
import useThunk from '../../hooks/use-thunk/useThunk'
import { removeStaff } from '../../store'
// components
import ExpandablePanel from '../ExpandablePanel'
import AlbumsList from '../Albums/AlbumsList'
import RemoveButton from '../Default/RemoveButton'
// assets
import { toast } from 'react-toastify'
// constants
import { SNACKS } from '../../constants'

StaffListItem.propTypes = {
  staff: PropTypes.object.isRequired,
}

function StaffListItem({ staff }) {
  const [deleteStaff, isLoading, error] = useThunk(removeStaff)

  const handleRemove = () => {
    deleteStaff(staff)
    toast.success(SNACKS.STAFF_REMOVE)
  }

  const header = (
    <>
      <RemoveButton onClick={handleRemove} loading={isLoading} />
      {error && toast.error(error.message)}
      <h1 className={StyledStaffH1}>{staff.name}</h1>
    </>
  )

  return (
    <ExpandablePanel header={header}>
      <AlbumsList staff={staff} />
    </ExpandablePanel>
  )
}

export default StaffListItem
