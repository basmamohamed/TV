import React  , {Component}from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
//import NavigationService from './NavigationService'
import VideoPageScreen from '../VideoPage'
import VideoComponentScreen from '../VideoComponent'

const TopLevelNavigator = createStackNavigator({
 
  VideoComponent:{screen:VideoComponentScreen},
  VideoPage:{screen:VideoPageScreen},
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  })
  const AppContainer = createAppContainer(TopLevelNavigator)
// class Routes extends Component {

//   render(){
//   return (
//       <AppContainer
//         // ref={navigatorRef => {
//         //   NavigationService.setTopLevelNavigator(navigatorRef);
//         // }}
//         />
//   )
//       }
// };
 export default AppContainer;
