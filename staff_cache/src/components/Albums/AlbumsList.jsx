import React from 'react'
import { useFetchAlbumsQuery, useCreateAlbumMutation } from '../../store'
import { toast } from 'react-toastify'
import { FaPlus } from 'react-icons/fa'
import AlbumsListItem from './AlbumsListItem'
import Skeleton from '../Skeleton'
import Button from '../Button'

export default function AlbumsList({ staff }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(staff)
  const [createAlbum, results] = useCreateAlbumMutation()

  const handleCreateAlbums = async () => {
    await createAlbum(staff)
    toast.success('Album created')
  }

  let content

  if (isFetching) {
    content = <Skeleton custom='w-full h-10' times={6} />
  } else if (error) {
    content = toast.error(error.message)
  } else {
    content = data?.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />
    })
  }

  return (
    <div className=''>
      <div className='flex flex-row justify-between items-center my-3'>
        <h3 className='text-lg font-bold'>Albums for {staff.name}</h3>
        <Button
          onClick={handleCreateAlbums}
          warning
          loading={results.isLoading}
        >
          <FaPlus /> <h1 className='text-lg text-black'>Add Album</h1>
        </Button>
      </div>
      <div className=''>{content}</div>
    </div>
  )
}
