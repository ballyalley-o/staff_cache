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

export const StyledWrapperDiv = classNames(
  'flex flex-row justify-between gap-5 items-center my-3'
)
export const StyledPhotoWrapperDiv = classNames(
  'mx-8 flex flex-row flex-wrap justify-center'
)
export const StyledExpandableWrapperDiv = classNames(
  'flex p-2 justify-between items-center'
)

export const StyledExpandableDiv = classNames('mb-2 border rounded')
export const ExpandableCursor = classNames('cursor-pointer')
export const ExpandableChildren = classNames('p-2 border-t')
export const StyledHeaderH3 = classNames('text-lg font-bold')
export const StyledStaffH1 = classNames('text-4xl')
export const StyledLogoH1 = classNames('text-8xl font-bold')
export const StyledRemoveButton = classNames('bg-red-500')
export const StyledIconFa = classNames('text-white')
export const StyledIconFaSize = classNames('text-3xl')
export const StyledButton = classNames('text-lg text-black')
export const StyledErrorP = classNames('text-red-500')
export const StyledLoadingWrapperDiv = classNames(
  'flex justify-center items-center'
)
export const StyledLoadingButtonDiv = classNames(
  'animate-spin rounded-full border-t-2 border-b-2 border-white-900 '
)

export const StyledPhotoItemWrapperDiv = classNames('relative m-2')
export const StyledPhotoItemDiv = classNames(
  'absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80 cursor-pointer'
)
export const AlbumCoverSize = classNames('h-20 w-20')
