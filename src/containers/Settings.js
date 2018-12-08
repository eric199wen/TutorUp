import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}
