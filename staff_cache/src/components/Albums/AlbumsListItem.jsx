import React from 'react'
import PropTypes from 'prop-types'
import { useRemoveAlbumMutation } from '../../store/apis/albums-api'
import PhotosList from '../Photos/PhotosList'
import Button from '../Button'
import ExpandablePanel from '../ExpandablePanel'
import { BsTrashFill } from 'react-icons/bs'
import { toast } from 'react-toastify'

AlbumsListItem.propTypes = {
  album: PropTypes.object.isRequired,
}

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation()
  const handleRemoveAlbum = async () => {
    await removeAlbum(album)
    toast.success('Album removed')
  }

  const header = (
    <>
      <Button onClick={handleRemoveAlbum} loading={results.isLoading}>
        <BsTrashFill />
      </Button>
      {album.title.name}
    </>
  )

  return (
    <ExpandablePanel key={album.id} header={header}>
      <p>
        Atomic no.: <b>{album.title.atomicNumber}</b>
      </p>
      <p>
        Symbol: <b>{album.title.symbol}</b>
      </p>
      <PhotosList album={album} />
    </ExpandablePanel>
  )
}

export default AlbumsListItem
