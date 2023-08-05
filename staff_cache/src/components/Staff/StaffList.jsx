import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchStaff, addStaff } from '../../store'
// hooks
import useThunk from '../../hooks/use-thunk/useThunk'
// components
import Button from '../Button.jsx'
import Skeleton from '../Skeleton'
// styles
import {
  StyledErrorP,
  StyledWrapperDiv,
  StyledLogoH1,
} from '../../theme/styles'
// assets
import { FaPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'
// constants
import { BUTTONS, SNACKS, TITLES } from '../../constants'
import StaffListItem from './StaffListItem'

export default function StaffList() {
  const { data } = useSelector((state) => state.staff)
  const [getStaff, isLoadingStaff, loadingStaffError] = useThunk(fetchStaff)
  const [createStaff, isCreateStaff, createStaffError] = useThunk(addStaff)

  useEffect(() => {
    getStaff()
  }, [getStaff])

  const handleAddStaff = () => {
    createStaff()
    toast.success(SNACKS.STAFF_ADDED)
  }

  let content

  if (isLoadingStaff) {
    content = <Skeleton custom='w-full h-10' times={6} />
  } else if (loadingStaffError) {
    content = <p className={StyledErrorP}>{loadingStaffError}</p>
  } else {
    content = data?.map((staff) => {
      return <StaffListItem key={staff.id} staff={staff} />
    })
  }

  return (
    <div className='mt-2'>
      <div className={StyledWrapperDiv}>
        <h1 className={StyledLogoH1}>{TITLES.LOGO_HEADER}</h1>

        <Button onClick={handleAddStaff} loading={isCreateStaff} primary>
          <FaPlus />
          {BUTTONS.ADD_STAFF}
        </Button>

        {createStaffError && <p className={StyledErrorP}>{createStaffError}</p>}
      </div>
      {content}
    </div>
  )
}
