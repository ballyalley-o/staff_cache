import React from 'react'
import { useFetchAlbumsQuery, useCreateAlbumsMutation } from '../../store'
import { toast } from 'react-toastify'
import { FaPlus } from 'react-icons/fa'
import Skeleton from '../Skeleton'
import ExpandablePanel from '../ExpandablePanel'
import Button from '../Button'

export default function AlbumsList({ staff }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(staff)
  const [createAlbums, results] = useCreateAlbumsMutation()

  const handleCreateAlbums = () => {
    createAlbums(staff)
  }

  let content

  if (isLoading) {
    content = <Skeleton custom='w-full h-10' times={6} />
  } else if (error) {
    content = toast.error(error.message)
  } else {
    content = data.map((album) => {
      const header = <div>{album.title.name}</div>

      return (
        <ExpandablePanel key={album.id} header={header}>
          <p>
            Atomic no.: <b>{album.title.atomicNumber}</b>
          </p>
          <p>
            Symbol: <b>{album.title.symbol}</b>
          </p>
        </ExpandablePanel>
      )
    })
  }

  console.log(data, error, isLoading)
  return (
    <div className=''>
      <div className='flex flex-row justify-between items-center my-3'>
        Albums for {staff.name}
        <Button onClick={handleCreateAlbums} warning>
          <FaPlus /> <h1 className='text-lg text-black'>Add Album</h1>
        </Button>
      </div>
      <div className=''>{content}</div>
    </div>
  )
}
