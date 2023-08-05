import React from 'react'
import { useRemovePhotoMutation } from '../../store'
// styles
import {
  StyledPhotoItemWrapperDiv,
  AlbumCoverSize,
  StyledPhotoItemDiv,
  StyledIconFaSize,
} from '../../theme'
// assets
import { BsTrashFill } from 'react-icons/bs'
import { toast } from 'react-toastify'
// components
import Button from '../Button'
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
      <div className={StyledPhotoItemDiv}>
        <Button loading={results.isLoading}>
          <BsTrashFill className={StyledIconFaSize} />
        </Button>
      </div>
    </div>
  )
}

export default PhotosListItem
