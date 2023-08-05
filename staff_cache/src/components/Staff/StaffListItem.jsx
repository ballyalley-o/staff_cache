import React from 'react'
import PropTypes from 'prop-types'
// styles
import {
  StyledStaffH1,
  StyledRemoveButton,
  StyledIconFa,
} from '../../theme/styles'
// hooks
import useThunk from '../../hooks/use-thunk/useThunk'
import { removeStaff } from '../../store'
// components
import ExpandablePanel from '../ExpandablePanel'
import AlbumsList from '../Albums/AlbumsList'
import Button from '../Button'
// assets
import { toast } from 'react-toastify'
import { BsTrashFill } from 'react-icons/bs'
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
      <Button
        loading={isLoading}
        onClick={handleRemove}
        className={StyledRemoveButton}
      >
        <BsTrashFill className={StyledIconFa} />
      </Button>
      {error && <div>{toast.error(error.message)}</div>}
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
