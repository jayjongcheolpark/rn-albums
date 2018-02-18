import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <Text>{album.title}</Text>
    </CardSection>
  </Card>
)

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default AlbumDetail
