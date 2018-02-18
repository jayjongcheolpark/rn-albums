import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
}

const AlbumDetail = ({ album }) => {
  const { headerContentStyle, thumbnailStyle } = styles
  const { title, artist, thumbnail_image } = album

  return (
    <Card>
      <CardSection>
        <View>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  )
}

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    thumbnail_image: PropTypes.string.isRequired,
  }).isRequired,
}

export default AlbumDetail
