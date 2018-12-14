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
    store.load();
    this.props.navigation.setParams({ save: this.save });
  }

  save = () => {
    store.submit();
  }

  render() {
    const isTutor = store.isTutor;

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
        {isTutor && 
          <View>
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
            <SelectInput
              label='學校'
              value={store.selectedSchool}
              data={store.school}
              onChangeText={store.setSchool}
            />
          </View>
        }
        {!isTutor && 
          <View>
            <SelectInput
              label='學歷'
              value={store.selectedEducation}
              data={store.education}
              onChangeText={store.setEducation}
            />
            <TextInput
              label='希望達成目標'
              value={store.goal}
              onChangeText={store.setGoal}
            />
          </View>
        }
        <TextInput
          label='簡介'
          value={store.intro}
          onChangeText={store.setIntro}
        />
      </ScrollView>
    );
  }
}
