import React from 'react'
import PropTypes from 'prop-types'

export default function Loading({ isButton }) {
  return (
    <div
      className={`flex justify-center items-center ${!isButton && 'h-screen'}`}
    >
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 border-white-900 ${
          isButton ? 'h-8 w-8 ' : 'h-32 w-32'
        }`}
      ></div>
    </div>
  )
}
