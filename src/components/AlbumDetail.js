import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
}

const AlbumDetail = ({ album }) => {
  const { headerContentStyle } = styles

  return (
    <Card>
      <CardSection>
        <View />
        <View style={headerContentStyle}>
          <Text>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  )
}

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired,
}

export default AlbumDetail
