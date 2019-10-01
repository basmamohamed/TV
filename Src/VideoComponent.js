import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StatusBar } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import SocialMedia from './SocialMedia';
import Icon from 'react-native-vector-icons/FontAwesome5'
//import {NavigationService} from './Navigations/NavigationService'

let Height = Dimensions.get('window').height
let Width = Dimensions.get('window').width

export default class VideoComponent extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <View style={{ margin: 20, justifyContent: 'flex-end', flexDirection: 'row' }}>
          <Icon name='headset' size={20} />
        </View>
        <VideoPlayer style={{ height: Height * 0.65 }}
         onEnterFullscreen={() => this.props.navigation.navigate('VideoPage' , {Video:' http://82.212.74.2:8000/live/7321.m3u8'})}
          disableBack
          disableVolume
          source={{ uri: 'http://82.212.74.2:8000/live/7321.m3u8' }}
          thumbnail={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        />
        <Text style={style.TextStyle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
        <SocialMedia />
        
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