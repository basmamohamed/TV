import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import AboutUs from '../Components/AboutUs';
import ContactUs from '../Components/ContactUs';
import Home from '../Components/Home';
import MissionAndVission from '../Components/MissionAndVission';
import ProductCategory from '../Components/ProductCategory';
import ServiceCategory from '../Components/ServiceCategory';
import MenuDrawer from '../Components/Comman/MenuDrawer';
import News from '../Components/News';
import {language} from '../Global/Localization/Strings'

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
	initialRouteName: 'Home',
	drawerWidth: WIDTH * 0.83,
	if () {
		
	},
    drawerPosition: language == 'ar'?'right' : 'left',
	contentComponent: MenuDrawer,
	
}

const DrawerNavigator = createDrawerNavigator(

	{
        Home: {
			screen: Home
        },
		ServiceCategory: {
			screen: ServiceCategory
		},
		News:{
			screen:News
		},
		ProductCategory: {
			screen: ProductCategory
        },
        ContactUs: {
			screen: ContactUs
        },
        MissionAndVission: {
			screen: MissionAndVission
        },
        AboutUs: {
			screen: AboutUs
		},
	},
	DrawerConfig,

);

export default DrawerNavigator;