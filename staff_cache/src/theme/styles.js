import classNames from 'classnames'

// @root - Skeleton
export const StyledOuterDiv = (custom) =>
  classNames(
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    'rounded',
    'mb-2.5',
    custom
  )
export const StyledInnerDiv = classNames(
  'animate-shimmer',
  'absolute',
  'inset-0',
  '-translate-x-full',
  'bg-gradient-to-r',
  'from-gray-200',
  'via-white',
  'to-gray-200'
)
