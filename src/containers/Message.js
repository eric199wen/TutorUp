import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Message extends Component {
  static navigationOptions = {
    title: 'Message',
  };

  render() {
    return (
      <View>
        <Text>Message</Text>
      </View>
    );
  }
}
