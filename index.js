// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('MobileLegends', () => App);

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'tab.Home', // this is a registered name for a screen
      icon: require('./img/one.png'),
      //selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Home',
      navigatorStyle:{
        navBarHidden:true
      }
    },
    {
      label: 'Heroes',
      screen: 'tab.Hero',
      icon: require('./img/two.png'),
      //selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Heroes',
      navigatorStyle:{
        navBarHidden:true
      }
    },
    {
      label: 'Settings',
      screen: 'tab.Settings',
      icon: require('./img/three.png'),
      //selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Settings',
      navigatorStyle:{
        navBarHidden:true
      }
    }
  ]
});