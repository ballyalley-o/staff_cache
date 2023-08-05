import React from 'react'
import { useFetchAlbumsQuery, useCreateAlbumMutation } from '../../store'
// components
import { toast } from 'react-toastify'
import { FaPlus } from 'react-icons/fa'
import AlbumsListItem from './AlbumsListItem'
import Skeleton from '../Skeleton'
import Button from '../Button'
// styles
import {
  StyledWrapperDiv,
  StyledHeaderH3,
  StyledButton,
} from '../../theme/styles'
// constants
import { BUTTONS, SNACKS } from '../../constants'

export default function AlbumsList({ staff }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(staff)
  const [createAlbum, results] = useCreateAlbumMutation()

  const handleCreateAlbums = async () => {
    await createAlbum(staff)
    toast.success(SNACKS.ALBUM_CREATED)
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
    <div>
      <div className={StyledWrapperDiv}>
        <h3 className={StyledHeaderH3}>Albums for {staff.name}</h3>
        <Button
          onClick={handleCreateAlbums}
          warning
          loading={results.isLoading}
        >
          <FaPlus /> <h1 className={StyledButton}>{BUTTONS.ADD_ALBUM}</h1>
        </Button>
      </div>
      <div>{content}</div>
    </div>
  )
}
