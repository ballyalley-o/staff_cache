import React from 'react'
import { useFetchPhotosQuery, useCreatePhotoMutation } from '../../store'
import Button from '../Button'
import Skeleton from '../Skeleton'
import PhotosListItem from './PhotosListItem'
import { FaPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'

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
      toast.success('Photo created')
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <div>
      <div className='my-2 flex flex-row items-center justify-between'>
        <h3 className='text-lg font-bold'>
          Suggested album covers for {album?.title.name}
        </h3>
        <Button
          loading={results.isLoading}
          onClick={handleCreatePhoto}
          secondary
        >
          <FaPlus /> Add Album Cover
        </Button>
      </div>
      <div className='mx-8 flex flex-row flex-wrap justify-center'>
        {content}
      </div>
    </div>
  )
}

export default PhotosList
