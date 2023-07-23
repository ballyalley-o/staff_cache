import React from 'react'
import PropTypes from 'prop-types'
import { StyledOuterDiv, StyledInnerDiv } from '../theme/styles'

Skeleton.propTypes = {
  times: PropTypes.number,
  custom: PropTypes.string,
}

Skeleton.defaultProps = {
  times: 1,
  custom: 'h-10 w-full',
}

function Skeleton({ times, custom }) {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={StyledOuterDiv(custom)}>
          <div className={StyledInnerDiv} />
        </div>
      )
    })

  return boxes
}

export default Skeleton
