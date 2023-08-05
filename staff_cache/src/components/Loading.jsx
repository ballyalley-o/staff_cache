import React from 'react'
import { StyledLoadingWrapperDiv, StyledLoadingButtonDiv } from '../theme'

export default function Loading({ isButton }) {
  return (
    <div className={StyledLoadingWrapperDiv` ${!isButton && 'h-screen'}`}>
      <div
        className={StyledLoadingButtonDiv` ${
          isButton ? 'h-8 w-8 ' : 'h-32 w-32'
        }`}
      ></div>
    </div>
  )
}
