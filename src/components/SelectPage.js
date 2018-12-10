import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import { observer } from 'mobx-react';
import { CheckBox } from 'native-base';

@observer
export default class SelectPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'NO TITLE'),
      headerRight: (
        <Button
          onPress={navigation.getParam('save')}
          title="Save"
          color='#007AFF'
          buttonStyle={{
            backgroundColor: 'white'
          }}
        />
      ),
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    const submit = navigation.getParam('submit', null);
    navigation.setParams({ save: submit });
  }

  save = () => {
    
  }

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', []);
    const toggle = navigation.getParam('toggle', null);

    return (
      <ScrollView>
        <List>
          {data.map((item, i) => (
            <ListItem
              key={i}
              containerStyle={styles.listItem}
              title={item.name}
              rightIcon={<CheckBox checked={item.selected} />}
              onPress={() => toggle(item.id)}
              onPressRightIcon={() => toggle(item.id)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    paddingRight: 30
  }
});
