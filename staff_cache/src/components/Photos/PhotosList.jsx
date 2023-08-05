import React from 'react'
import { useFetchPhotosQuery, useCreatePhotoMutation } from '../../store'
// styles
import {
  StyledWrapperDiv,
  StyledHeaderH3,
  StyledPhotoWrapperDiv,
} from '../../theme'
// components
import Button from '../Button'
import Skeleton from '../Skeleton'
import PhotosListItem from './PhotosListItem'
import AddButton from '../Default/AddButton'
// assets
import { FaPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'
// constants
import { SNACKS, BUTTONS } from '../../constants'

function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album)
  const [createPhoto, results] = useCreatePhotoMutation()

  let content

  if (isFetching) {
    content = <Skeleton times={4} custom='h-8 w-8' />
  } else if (error) {
    content = toast.error(error.message)
  } else {
    content = data?.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />
    })
  }

  const handleCreatePhoto = () => {
    try {
      createPhoto(album)
      toast.success(SNACKS.ALBUM_COVER_CREATED)
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <div>
      <div className={StyledWrapperDiv}>
        <h3 className={StyledHeaderH3}>
          Suggested album covers for {album?.title.name}
        </h3>
        <AddButton
          onClick={handleCreatePhoto}
          loading={results.isLoading}
          content={BUTTONS.ADD_ALBUM_COVER}
          secondary
        />
      </div>
      <div className={StyledPhotoWrapperDiv}>{content}</div>
    </div>
  )
}

export default PhotosList
