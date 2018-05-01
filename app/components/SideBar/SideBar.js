import React, { Component } from 'react'
import {
  Linking,
  Text,
  TextInput,
  View,
  Platform
} from 'react-native'
import {
  Container,
  Content,
  List,
  Body,
  Left,
  Right,
  ListItem,
  Icon,
  Button,
  Thumbnail
} from 'native-base'

import styles from './styles'

export default class SideBar extends React.Component {
  render () {
    return (
      <Container style={{backgroundColor: 'white'}}>
        {/* <View style={styles.sideNavWrap}>
          <View style={styles.noteSelectorWrap}>
            <Text style={styles.appName}>Boostnote Mobile</Text>
            <Button style={Platform.OS === 'android' ? 
                              {marginBottom: 20, 
                                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                                width: '96%', 
                                height: 35, 
                                paddingTop: 6, 
                                paddingLeft: 7} : {backgroundColor: 'transparent', paddingLeft: 0}}
              onPress={() => {

              }}
            >
              <Text style={Platform.OS === 'android' ? styles.noteSelectorAndroid : styles.noteSelector}><Icon name='md-archive' style={{color: '#FDC134', fontSize: 14, backgroundColor: 'transparent'}} /> All Notes</Text>
            </Button>
          </View>

          <View style={styles.noteSelectorWrap}>
            <Button style={Platform.OS === 'android' ? {marginBottom: 20, backgroundColor: 'rgba(255, 255, 255, 0.05)', width: '96%', height: 35, paddingTop: 6, paddingLeft: 7} : {backgroundColor: 'transparent', paddingLeft: 0}}
              onPress={() => {

              }}
            >
              <Text style={Platform.OS === 'android' ? styles.noteSelectorAndroid : styles.noteSelector}><Icon name='logo-dropbox' style={{color: '#2BA6FA', fontSize: 18, backgroundColor: 'transparent'}} /> Dropbox</Text>
            </Button>
          </View>
        </View> */}

        <Content>
          <Thumbnail style="padding: 10" source={{uri: 'https://lh4.googleusercontent.com/PZJZcXaLXAKQt6JD4KRbaMMX-HY7jvp8UI4uqNzJoS1qZ4rt15QkJ-ymhtDNeD5Bo5x_PWLLpCz1hhxKcHXz=w1920-h974-rw'}} />
          <List>
            <ListItem icon>
              <Left>
                <Icon name="person" type="MaterialIcons"/>
              </Left>
              <Body>
                <Text>Mi Perfil</Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
              <Icon name="label" type="MaterialIcons" />
              </Left>
              <Body>
                <Text>Mi Finca</Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
              <Icon name="grid-on" type="MaterialIcons" />
              </Left>
              <Body>
                <Text>Lotes</Text>
              </Body>
            </ListItem>
            
            <ListItem icon>
              <Left>
                <Icon name="local-florist" type="MaterialIcons" />
              </Left>
              <Body>
                <Text>Floracion</Text>
              </Body>
            </ListItem>
            
            <ListItem icon>
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>Abono</Text>
              </Body>
            </ListItem>
            
            <ListItem icon>
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>Riego</Text>
              </Body>
            </ListItem>
          </List>

          
        </Content>

        <View style={styles.bottomLink}>
          <Text onPress={() => Linking.openURL('https://boostnote.io/#subscribe')} style={styles.bottomLinkWord}>
            <Icon style={{fontSize: 28, color: 'rgba(255, 255, 255, 0.6)'}} name='ios-mail' />
          </Text>
          <Text onPress={() => Linking.openURL('https://github.com/BoostIO/Boostnote-mobile')} style={styles.bottomLinkWord}>
            <Icon style={{fontSize: 28, color: 'rgba(255, 255, 255, 0.6)'}} name='logo-github' />
          </Text>
          <Text onPress={() => Linking.openURL('https://twitter.com/boostnoteapp')} style={styles.bottomLinkWord}>
            <Icon style={{fontSize: 28, color: 'rgba(255, 255, 255, 0.6)'}} name='logo-twitter' />
          </Text>
          <Text onPress={() => Linking.openURL('https://www.facebook.com/groups/boostnote/')} style={styles.bottomLinkWord}>
            <Icon style={{fontSize: 28, color: 'rgba(255, 255, 255, 0.6)'}} name='logo-facebook' />
          </Text>
        </View>
      </Container>
    )
  }
}