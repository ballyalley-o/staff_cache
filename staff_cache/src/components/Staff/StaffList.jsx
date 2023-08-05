import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchStaff, addStaff } from '../../store'
// hooks
import useThunk from '../../hooks/use-thunk/useThunk'
// components
import Skeleton from '../Skeleton'
import AddButton from '../Default/AddButton'
// styles
import { StyledErrorP, StyledWrapperDiv } from '../../theme/styles'
// assets
import { toast } from 'react-toastify'
// constants
import { BUTTONS, SNACKS } from '../../constants'
import StaffListItem from './StaffListItem'

export default function StaffList() {
  const { data } = useSelector((state) => state.staff)
  const [getStaff, isLoadingStaff, loadingStaffError] = useThunk(fetchStaff)
  const [createStaff, isCreateStaff, createStaffError] = useThunk(addStaff)

  useEffect(() => {
    getStaff()
  }, [getStaff])

  const handleAddStaff = async () => {
    await createStaff()
    toast.success(SNACKS.STAFF_ADDED)
  }

  let content

  if (isLoadingStaff) {
    content = <Skeleton times={6} />
  } else if (loadingStaffError) {
    content = <p className={StyledErrorP}>{loadingStaffError}</p>
  } else {
    content = data?.map((staff) => {
      return <StaffListItem key={staff.id} staff={staff} />
    })
  }

  return (
    <div>
      <div className={StyledWrapperDiv}>
        <AddButton
          onClick={handleAddStaff}
          loading={isCreateStaff}
          content={BUTTONS.ADD_STAFF}
          primary
          isPrimaryHeader
        />
        {createStaffError && <p className={StyledErrorP}>{createStaffError}</p>}
      </div>
      {content}
    </div>
  )
}
