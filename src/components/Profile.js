import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';
import { observer } from 'mobx-react';
import { ListItem } from 'native-base';
import store from '../stores/ProfileStore';
import TextInput from './shared/TextInput';
import SelectInput from './shared/SelectInput';

@observer
export default class Profile extends Component {
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
    this.props.navigation.setParams({ save: this.save });
  }

  save = () => {
    store.submit();
  }

  render() {
    return (
      <ScrollView>
        <ListItem itemDivider />
        <SelectInput
          label='身分'
          value={store.selectedTutorOrStudent}
          data={store.tutorOrStudent}
          onChangeText={store.setTutorOrStudent}
        />
        <TextInput
          label='姓名'
          value={store.name}
          onChangeText={store.setName}
        />
        <SelectInput
          label='性別'
          value={store.selectedGender}
          data={store.gender}
          onChangeText={store.setGender}
        />
        <View>
          <TextInput
            label='科系'
            value={store.major}
            onChangeText={store.setMajor}
          />
          <SelectInput
            label='學歷'
            value={store.selectedEducation}
            data={store.education}
            onChangeText={store.setEducation}
          />
        </View>
        <TextInput
          label='簡介'
          value={store.intro}
          onChangeText={store.setIntro}
        />
      </ScrollView>
    );
  }
}