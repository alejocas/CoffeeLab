/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  ScrollView,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  SectionList,
  View
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Drawer
} from 'native-base';


import SideBar from './components/SideBar';

import styles from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu soy david',
});

const HeaderLeft = ({openDrawer}) => (
  <Left>
    <View>
      <Button transparent onPress={openDrawer}>
        <Text>asdf</Text>
      </Button>
    </View>
  </Left>
)

type Props = {};
export default class App extends Component<Props> {

  constructor () {
    super()
    
    this.openDrawer = this.openDrawer.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)

  }
  
  openDrawer () {
    this._drawer._root.open()
  }

  closeDrawer () {
    this._drawer._root.close()
  }

  render() {
    return (
      
      <Drawer
        ref={(ref) => {
          this._drawer = ref
        }}
        content={
          <SideBar
            onClose={() => this.closeDrawer()} />
        }
        panOpenMask={0.05}>
        <Container>
          <Header>
            <Left>
              <Button transparent
                onPress={this.openDrawer}>
                <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Right>
          </Header>
        </Container>

        <View>
          <Text></Text>
        </View>
      </Drawer>

      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      //   <TextInput
      //     style={{height: 40, width: 100}}
      //     placeholder="ASDF"
      //     onChangeText={text => console.log(text)}
      //   />
      //   <Button
      //     onPress={() =>{
      //       Alert.alert("Me tocaste pinche Cabrón")
      //     }}
      //     title="Click en mi"
      //   />

      // </View>
      /*<View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>*/
      // <View style={styles.container}>
      //   <SectionList
      //     sections={[
      //       {title: 'D', data: ['Devin']},
      //       {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
      //     ]}
      //     renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      //     renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      //     keyExtractor={(item, index) => index}
      //   />
      // </View>
    );
  }
}
/*
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
  /*container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },*/
   /*container: {
    flex: 1,
    paddingTop: 22
   },
   sectionHeader: {
     paddingTop: 2,
     paddingLeft: 10,
     paddingRight: 10,
     paddingBottom: 2,
     fontSize: 14,
     fontWeight: 'bold',
     backgroundColor: 'rgba(247,247,247,1.0)',
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
});*/
