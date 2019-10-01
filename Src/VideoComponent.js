import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StatusBar } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import SocialMedia from './SocialMedia';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Orientation from 'react-native-orientation'

let Height = Dimensions.get('window').height
let Width = Dimensions.get('window').width

export default class VideoComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      FullScreen: false
    }
  }
  componentDidMount() {
    Orientation.lockToPortrait()
  }
 
  renderHeader() {
    return(
    <View style={{ margin: 20, justifyContent: 'flex-end', flexDirection: 'row' }}>
      <Icon name='headset' size={20} />
    </View>
    )
  }
  renderFooter() {
    return(
    <View>
      <Text style={style.TextStyle}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
      <SocialMedia />
    </View>
    )
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        {this.state.FullScreen == false ? this.renderHeader():<View/>}
        <VideoPlayer style={{ height: Width }}
          onEnterFullscreen={() => {
            Orientation.lockToLandscapeLeft()
            this.setState({ FullScreen: true })
            StatusBar.setHidden(true)
          }}
          onExitFullscreen={() => {
            Orientation.lockToPortrait()
            this.setState({ FullScreen: false })
            StatusBar.setHidden(false)
          }}
          disableBack
          disableVolume
          paused={this.state.FullScreen == false ? true : false}
          source={{ uri: 'http://82.212.74.2:8000/live/7321.m3u8' }}
          thumbnail={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        />
        {this.state.FullScreen == false ? this.renderFooter():<View/>}
      </ScrollView>
    )
  }
}
const style = {
  TextStyle: {
    color: '#a8a8a8',
    lineHeight: 25,
    margin: Width * 0.1
  }
}