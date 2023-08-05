import React from 'react'
import { useRemovePhotoMutation } from '../../store'
import { BsTrashFill } from 'react-icons/bs'
import Button from '../Button'
import { toast } from 'react-toastify'

function PhotosListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation()
  const handleRemovePhoto = () => {
    removePhoto(photo)
    toast.success('Photo removed')
  }

  return (
    <div onClick={handleRemovePhoto} className='relative m-2'>
      <img src={photo.url} alt='random' className='h-20 w-20' />
      <div className='absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80 cursor-pointer'>
        <Button loading={results.isLoading}>
          <BsTrashFill className='text-3xl' />
        </Button>
      </div>
    </div>
  )
}

export default PhotosListItem
