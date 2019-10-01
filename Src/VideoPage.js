import React, { Component } from 'react';
import {Dimensions } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
//import NavigationService from './Navigations/NavigationService'

let Height = Dimensions.get('window').height

export default class VideoComponent extends Component {
  
  render() {
      console.log("page");
      
    return (
        <VideoPlayer style={{ height: Height  }}
        onExitFullscreen = {() => this.props.navigation.navigate('VideoComponent' )}
        resizeMode='cover'
        paused={false}
          disableBack
          disableVolume
          source={{ uri: this.props.navigation.getParam('Video') }}
        />
           )
  }
}
