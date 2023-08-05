import React from 'react'
import PropTypes from 'prop-types'
import { useRemoveAlbumMutation } from '../../store/apis/albums-api'
// styles
import { StyledRemoveButton, StyledIconFa } from '../../theme/styles'
// components
import PhotosList from '../Photos/PhotosList'
import Button from '../Button'
import ExpandablePanel from '../ExpandablePanel'
// assets
import { BsTrashFill } from 'react-icons/bs'
import { toast } from 'react-toastify'
// constants
import { SNACKS } from '../../constants'

AlbumsListItem.propTypes = {
  album: PropTypes.object.isRequired,
}

export default function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation()
  const handleRemoveAlbum = async () => {
    await removeAlbum(album)
    toast.success(SNACKS.ALBUM_REMOVE)
  }

  const header = (
    <>
      <Button
        onClick={handleRemoveAlbum}
        loading={results.isLoading}
        className={StyledRemoveButton}
      >
        <BsTrashFill className={StyledIconFa} />
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
