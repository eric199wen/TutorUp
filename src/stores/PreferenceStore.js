import { observable, action, computed } from 'mobx';
import { getPreference } from '../api/settings';

export class PreferenceStore {
  @observable userId = 1;
  @observable isActivelySearch = true;

  @observable districts = [
    { id: 0, name: '台北', selected: false },
    { id: 1, name: '桃園', selected: false },
    { id: 2, name: '新竹', selected: false },
    { id: 3, name: '苗栗', selected: false },
    { id: 4, name: '台中', selected: false },
    { id: 5, name: '台南', selected: false },
    { id: 6, name: '高雄', selected: false },
    { id: 7, name: '彰化', selected: false },
    { id: 8, name: '嘉義', selected: false },
    { id: 9, name: '雲林', selected: false },
    { id: 10, name: '南投', selected: false },
    { id: 11, name: '宜蘭', selected: false },
    { id: 12, name: '花蓮', selected: false },
    { id: 13, name: '台東', selected: false },
    { id: 14, name: '屏東', selected: false },
  ];
  @computed get selectedDistricts() {
    let res = [];
    this.districts.forEach((district) => {
      if (district.selected) {
        res.push(district);
      }
    });

    return res;
  };

  @observable subjects = [
    { id: 0, name: '國文', selected: false },
    { id: 1, name: '英文', selected: false },
    { id: 2, name: '數學', selected: false },    
    { id: 3, name: '物理', selected: false },
    { id: 4, name: '化學', selected: false },
    { id: 5, name: '生物', selected: false },
    { id: 6, name: '地理', selected: false },
    { id: 7, name: '歷史', selected: false },
    { id: 8, name: '公民', selected: false },
  ]
  @computed get selectedSubjects() {
    let res = [];
    console.log('in selectdSubjects');
    this.subjects.forEach((subject) => {
      if (subject.selected) {
        res.push(subject);
      }
    });

    console.log(res);
    return res;
  };

  @observable targetAges = [
    { id: 0, name: '國小', selected: false },
    { id: 1, name: '國中', selected: false },
    { id: 2, name: '高中', selected: false },
    { id: 3, name: '大學', selected: false },
  ];
  @computed get selectedTargetAges() {
    let res = [];
    this.targetAges.forEach((targetAge) => {
      if (targetAge.selected) {
        res.push(targetAge);
      }
    });

    return res;
  };

  @observable isOnlineOrInPerson = [
    { id: 0, name: '線上', selected: true },
    { id: 1, name: '實體', selected: false },
    { id: 2, name: '皆可', selected: false }
  ];
  @computed get selectedIsOnlineOrInPerson() {
    let res = null;
    this.isOnlineOrInPerson.forEach((item) => {
      if (item.selected) {
        res = item;
      }
    });

    return res;
  };

  @observable compensation = [
    { id: 0, name: '$100/hr', selected: true },
    { id: 1, name: '$200/hr', selected: false },
    { id: 2, name: '$300/hr', selected: false },
    { id: 3, name: '$400/hr', selected: false },
    { id: 4, name: '$500/hr', selected: false },
    { id: 5, name: '$600/hr', selected: false },
    { id: 6, name: '$700/hr', selected: false },
    { id: 7, name: '$800/hr', selected: false },
    { id: 8, name: '$900/hr', selected: false },
    { id: 9, name: '$1000/hr', selected: false },
    { id: 10, name: '面議', selected: false }
  ];
  @computed get selectedCompensation() {
    let res = null;
    this.compensation.forEach((item) => {
      if (item.selected) {
        res = item;
      }
    });

    return res;
  };

  constructor(getPreference) {
    this.getPreference = getPreference;
  }

  @action toggleIsActivelySearch = () => {
    this.isActivelySearch = !this.isActivelySearch;
    this.submitIsActivelySearch();
  }

  @action toggleDistrict = (index) => {
    this.districts[index].selected = !this.districts[index].selected;
  }

  @action toggleSubject = (index) => {
    this.subjects[index].selected = !this.subjects[index].selected;
  }

  @action toggleTargetAge = (index) => {
    this.targetAges[index].selected = !this.targetAges[index].selected;
  }

  @action setIsOnlineOrInPerson = (index) => {
    this.isOnlineOrInPerson.forEach((item) => {
      item.selected = false;
    });

    this.isOnlineOrInPerson[index].selected = true;
  }

  @action setCompensation = (index) => {
    this.compensation.forEach((item) => {
      item.selected = false;
    });

    this.compensation[index].selected = true;
  }

  @computed get selectedDistrictsTitle() {
    let res = '';
    let count = 0;
    this.districts.forEach((district) => {
      if (district.selected) {
        res += `${district.name}, `;
        count += 1;
      }
    });

    if (count == 0) {
      return res;
    } else {
      return res.substring(0, res.length-2);
    }
  }

  @computed get selectedSubjectsTitle() {
    let res = '';
    let count = 0;
    this.subjects.forEach((subject) => {
      if (subject.selected) {
        res += `${subject.name}, `;
        count += 1;
      }
    });

    if (count == 0) {
      return res;
    } else {
      return res.substring(0, res.length-2);
    }
  }

  @computed get selectedTargetAgesTitle() {
    let res = '';
    let count = 0;
    this.targetAges.forEach((targetAge) => {
      if (targetAge.selected) {
        res += `${targetAge.name}, `;
        count += 1;
      }
    });

    if (count == 0) {
      return res;
    } else {
      return res.substring(0, res.length-2);
    }
  }

  @computed get selectedIsOnlineOrInPersonTitle() {
    let res = '';
    this.isOnlineOrInPerson.forEach((item) => {
      if (item.selected) {
        res = item.name;
      }
    });

    return res;
  }

  @computed get selectedCompensationTitle() {
    let res = '';
    this.compensation.forEach((item) => {
      if (item.selected) {
        res = item.name;
      }
    });

    return res;
  }

  load = async () => {
    await this.getPreference(this.userId);
  }

  submitIsActivelySearch = () => {
    const data = {
      userId: this.userId,
      isActivelySearch: this.isActivelySearch
    }

    console.log(data);
  }

  submitDistricts = () => {
    const data = {
      userId: this.userId,
      districts: this.selectedDistricts
    }

    console.log(data);
  }

  submitSubjects = () => {
    const data = {
      userId: this.userId,
      subjects: this.selectedSubjects
    }

    console.log(data);
  }

  submitTargetAges = () => {
    const data = {
      userId: this.userId,
      targetAges: this.selectedTargetAges
    }

    console.log(data);
  }

  submitIsOnlineOrInPerson = () => {
    const data = {
      userId: this.userId,
      isOnlineOrInPerson: this.selectedIsOnlineOrInPerson
    }

    console.log(data);
  }

  submitCompensation = () => {
    const data = {
      userId: this.userId,
      compensation: this.selectedCompensation
    }

    console.log(data);
  }
}

const preferenceStore = new PreferenceStore(getPreference);

export default preferenceStore;
