import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import Card from './Card'

const AlbumDetail = ({ album }) => (
  <Card>
    <Text>{album.title}</Text>
  </Card>
)

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default AlbumDetail
