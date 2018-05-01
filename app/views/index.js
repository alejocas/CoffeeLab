import { Navigation } from 'react-native-navigation';
import App from './app/App';
import HomePage from './app/views/HomePage'
import ProfilePage from './app/views/ProfilePage'

//AppRegistry.registerComponent('CoffeeLab', () => App);

export function registerScreens(){
    Navigation.registerComponent('HomePage', () => HomePage);
    Navigation.registerComponent('ProfilePage', () => ProfilePage);
    Navigation.registerComponent('CoffeeLab', () => App);
}