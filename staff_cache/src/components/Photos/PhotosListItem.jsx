import React from 'react'
import { useRemovePhotoMutation } from '../../store'
// styles
import { StyledPhotoItemWrapperDiv, AlbumCoverSize } from '../../theme'
// assets
import { toast } from 'react-toastify'
// components
import RemoveButton from '../Default/RemoveButton'
// constants
import { SNACKS } from '../../constants'

function PhotosListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation()
  const handleRemovePhoto = () => {
    removePhoto(photo)
    toast.success(SNACKS.ALBUM_COVER_REMOVE)
  }

  return (
    <div onClick={handleRemovePhoto} className={StyledPhotoItemWrapperDiv}>
      <img src={photo.url} alt='random' className={AlbumCoverSize} />
      <RemoveButton isPhoto loading={results.isLoading} />
    </div>
  )
}

export default PhotosListItem
