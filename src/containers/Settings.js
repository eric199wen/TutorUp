import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: 'Profile',
          icon: 'user',
          type: 'font-awesome'
        },
        {
          title: 'Preference',
          icon: 'user',
          type: 'font-awesome'
        }
      ],
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ backgroundColor: '#e1e8ee'}}>
        <List>
          {this.state.list.map((item, i) => (
            <ListItem
              key={i}
              title={ item.title }
              leftIcon={{ name: item.icon, type: item.type }}
              onPress={() => navigate(item.title, {
                title: item.title
              })}
            />
          ))}
        </List>
      </View>
    );
  }
}
