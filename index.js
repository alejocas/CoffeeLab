import { AppRegistry } from 'react-native';
import App from './app/App';
import registerScreens from './app/views';

registerScreens();

//AppRegistry.registerComponent('CoffeeLab', () => App);

/* Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'HomePage', // this is a registered name for a screen
        title: 'Screen One'
      },
      {
        label: 'Two',
        screen: 'ProfilePage',
        title: 'Screen Two'
      }
    ]
  }); */

    Navigation.startSingleScreenApp({
      screen: {
        screen: 'coffeeLab.HomePage',
        navigatorStyle: {
          navBarHidden: true,
        },
      },
    });





