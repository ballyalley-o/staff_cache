import React from 'react'
import PropTypes from 'prop-types'
// styles
import { StyledLogoH1 } from '../../theme'
// assets
import { FaPlus } from 'react-icons/fa'
// components
import Button from '../Button'
// constants
import { TITLES } from '../../constants'

AddButton.propTypes = {
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  content: PropTypes.string,
  isPrimaryHeader: PropTypes.bool,
}

export default function AddButton({
  onClick,
  loading,
  content,
  isPrimaryHeader,
  ...rest
}) {
  return (
    <>
      {isPrimaryHeader && (
        <h1 className={StyledLogoH1}>{TITLES.LOGO_HEADER}</h1>
      )}
      <Button onClick={onClick} loading={loading} {...rest}>
        <FaPlus />
        {content}
      </Button>
    </>
  )
}
