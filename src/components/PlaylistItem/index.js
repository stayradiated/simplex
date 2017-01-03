import React, {PropTypes} from 'react'

import GridItem from '../GridItem'

export default function PlaylistItem (props) {
  const {playlist} = props

  return (
    <GridItem
      link={`/library/1/playlists/${playlist.id}`}
      image={playlist.composite}
      title={playlist.title}
      subtitle={`${Math.round(playlist.duration / 1000 / 60)} mins`}
    />
  )
}

PlaylistItem.propTypes = {
  playlist: PropTypes.shape({
    composite: PropTypes.string,
    duration: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
}