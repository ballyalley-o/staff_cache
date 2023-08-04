import React from 'react'
import { useFetchPhotosQuery, useCreatePhotoMutation } from '../../store'
import Button from '../Button'
import { FaPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'

function PhotosList({ album }) {
  //   const { fetchPhotos, error, isLoading } = useFetchPhotosQuery(album)
  const [createPhoto, results] = useCreatePhotoMutation()

  const handleCreatePhoto = () => {
    createPhoto(album)
    toast.success('Photo Created')
  }

  return (
    <div>
      <div className='my-2 flex flex-row items-center justify-between'>
        <h3 className='text-lg font-bold'> Photos in {album?.title.name}</h3>
        <Button
          loading={results.isLoading}
          onClick={handleCreatePhoto}
          secondary
        >
          <FaPlus /> Add Photo
        </Button>
      </div>
    </div>
  )
}

export default PhotosList
