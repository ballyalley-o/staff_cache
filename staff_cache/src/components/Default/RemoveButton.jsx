import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
// styles
import {
  StyledRemoveButton,
  StyledIconFa,
  StyledPhotoItemDiv,
  StyledIconFaSize,
} from '../../theme'
// assets
import { BsTrashFill } from 'react-icons/bs'

RemoveButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  isPhoto: PropTypes.bool,
}

export default function RemoveButton({ loading, onClick, isPhoto, ...rest }) {
  return !isPhoto ? (
    <>
      <Button
        loading={loading}
        onClick={onClick}
        className={StyledRemoveButton}
      >
        <BsTrashFill className={StyledIconFa} />
      </Button>
    </>
  ) : (
    <div className={StyledPhotoItemDiv}>
      <Button loading={loading}>
        <BsTrashFill className={StyledIconFaSize} />
      </Button>
    </div>
  )
}
