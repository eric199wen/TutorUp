import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { observer } from 'mobx-react';
import store from '../stores/PreferenceStore';

@observer
export default class Preference extends Component {
  static navigationOptions = {
    title: 'Preference',
  };

  componentDidMount() {
    store.load();
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <ListItem
          title='積極尋找'
          hideChevron
          switchButton
          onSwitch={store.toggleIsActivelySearch}
          switched={store.isActivelySearch}
        />
        <ListItem
          title='授課地區'
          onPress={() => navigate('SelectPage', {
            title: 'Select District',
            data: store.districts,
            toggle: store.toggleDistrict,
            submit: store.submitDistricts
          })}
          rightTitle={<Text>{store.selectedDistrictsTitle}</Text>}
        />
        <ListItem
          title='授課科目'
          onPress={() => navigate('SelectPage', {
            title: 'Select Subjects',
            data: store.subjects,
            toggle: store.toggleSubject,
            submit: store.submitSubjects
          })}
          rightTitle={<Text>{store.selectedSubjectsTitle}</Text>}
        />
        <ListItem
          title='授課對象'
          onPress={() => navigate('SelectPage', {
            title: '選擇授課對象',
            data: store.targetAges,
            toggle: store.toggleTargetAge,
            submit: store.submitTargetAges
          })}
          rightTitle={<Text>{store.selectedTargetAgesTitle}</Text>}
        />
        <ListItem
          title='教學方式'
          onPress={() => navigate('SelectPage', {
            title: '選擇教學方式',
            data: store.isOnlineOrInPerson,
            toggle: store.setIsOnlineOrInPerson,
            submit: store.submitIsOnlineOrInPerson
          })}
          rightTitle={<Text>{store.selectedIsOnlineOrInPersonTitle}</Text>}
        />
        <ListItem
          title='希望待遇'
          onPress={() => navigate('SelectPage', {
            title: '選擇教學方式',
            data: store.compensation,
            toggle: store.submitCompensation
          })}
          rightTitle={<Text>{store.selectedCompensationTitle}</Text>}
        />
      </ScrollView>
    );
  }
}
