import { Navigation } from 'react-native-navigation';

import Home from './Home';
import Hero from './Hero';
import Settings from './Settings';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('tab.Home', () => Home);
  Navigation.registerComponent('tab.Hero', () => Hero);
  Navigation.registerComponent('tab.Settings', () => Settings);
}