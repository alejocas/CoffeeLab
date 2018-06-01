import { Navigation } from 'react-native-navigation';
import App from '../App';
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'

//AppRegistry.registerComponent('CoffeeLab', () => App);

export function registerScreens(){
    Navigation.registerComponent('coffeeLab.HomePage', () => HomePage);
    Navigation.registerComponent('coffeeLab.ProfilePage', () => ProfilePage);
    Navigation.registerComponent('coffeeLab.CoffeeLab', () => App);
}