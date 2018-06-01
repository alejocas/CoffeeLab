import React, { Component } from 'react';
import { Text,View, AlertIOS } from 'react-native';

/* export default class HomePage extends Component {
  render() {
    return (
      <Text>Home</Text>
    );
  }
} */
class FirstTabScreen extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Edit', // for a textual button, provide the button title (label)

      },
      {
        id: 'add' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
      }
    ]
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
        AlertIOS.alert('NavBar', 'Edit button pressed');
      }
      if (event.id == 'add') {
        AlertIOS.alert('NavBar', 'Add button pressed');
      }
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>...</View>
     );
  }
}