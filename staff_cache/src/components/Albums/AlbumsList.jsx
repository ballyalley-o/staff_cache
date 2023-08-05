import React from 'react'
import { useFetchAlbumsQuery, useCreateAlbumMutation } from '../../store'
// components
import AlbumsListItem from './AlbumsListItem'
import Skeleton from '../Skeleton'
import AddButton from '../Default/AddButton'
// assets
import { toast } from 'react-toastify'
// styles
import { StyledWrapperDiv, StyledHeaderH3 } from '../../theme/styles'
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
    content = <Skeleton times={6} />
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
        <AddButton
          onClick={handleCreateAlbums}
          loading={results.isLoading}
          content={BUTTONS.ADD_ALBUM}
          warning
        />
      </div>
      <div>{content}</div>
    </div>
  )
}
