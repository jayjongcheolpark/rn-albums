import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  containerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
}

const AlbumDetail = ({ album }) => {
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    containerStyle,
  } = styles
  const { title, artist, thumbnail_image, image } = album

  return (
    <Card>
      <View>
        <CardSection>
          <View style={containerStyle}>
            <View style={thumbnailContainerStyle}>
              <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
            </View>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{title}</Text>
              <Text>{artist}</Text>
            </View>
          </View>
        </CardSection>
        <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>
        <CardSection>
          <Button />
        </CardSection>
      </View>
    </Card>
  )
}

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    thumbnail_image: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default AlbumDetail
