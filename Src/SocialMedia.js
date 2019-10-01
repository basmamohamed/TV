import React from 'react'
import { View, Dimensions, TouchableOpacity , Image ,Linking } from 'react-native'

let Width = Dimensions.get('window').width;

const SocialMedia = () => {
    const { ContainerStyle, Icon,imageStyle } = style
    return (
        <View style={ContainerStyle}>

            <TouchableOpacity style={Icon} onPress={() => Linking.openURL('https://www.facebook.com/pentavalue')} >
                <Image source={require('./images/facebook_(2).png')} style={imageStyle}/>
            </TouchableOpacity>

            <TouchableOpacity style={Icon} onPress={() => Linking.openURL('https://instagram.com/penta.value?igshid=19gjeytvlc7og')}>
            <Image source={require('./images/instagram-small.png')} style={imageStyle}/>
            </TouchableOpacity>

            <TouchableOpacity style={Icon} onPress={() => Linking.openURL('https://twitter.com/pentavalue_com?s=08')}>
            <Image source={require('./images/twitter_(1).png')} style={imageStyle}/>
            </TouchableOpacity>


        </View>
    )
}
export default SocialMedia;

const style = {
    ContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal:Width*0.1,
        paddingBottom:'10%'
    },
    Icon: {
        width: 29,
        height: 29
    },
    imageStyle:{
        width:40,
        height:40
    }
}