import { NavigationActions} from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}
function navigate(routeName, params) {
 // console.log(routeName);
  
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );

}

export default {
  navigate,
  setTopLevelNavigator
};