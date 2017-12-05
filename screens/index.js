import { Navigation } from 'react-native-navigation';

//TabNavigator Screen
import Home from './Home';
import Hero from './Hero';
import Settings from './Settings';

//Push Screen
import HeroAdd from './HeroAdd';
import HeroView from './HeroView';
// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('tab.Home', () => Home);
  Navigation.registerComponent('tab.Hero', () => Hero);
  Navigation.registerComponent('tab.Settings', () => Settings);
  Navigation.registerComponent('push.HeroAdd', () => HeroAdd);
  Navigation.registerComponent('push.HeroView', () => HeroView);
}