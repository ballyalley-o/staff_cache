import React from 'react'
import { useFetchAlbumsQuery } from '../../store'
import { toast } from 'react-toastify'
import Skeleton from '../Skeleton'
import ExpandablePanel from '../ExpandablePanel'
import Button from '../Button'

export default function AlbumsList({ staff }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(staff)

  let content

  if (isLoading) {
    content = <Skeleton custom='w-full h-10' times={6} />
  } else if (error) {
    content = toast.error(error.message)
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>

      return (
        <ExpandablePanel key={album.id} header={header}>
          Random Photos
        </ExpandablePanel>
      )
    })
  }

  console.log(data, error, isLoading)
  return (
    <div className=''>
      <div>Albums for {staff.name}</div>
      <div className=''>{content}</div>
    </div>
  )
}
