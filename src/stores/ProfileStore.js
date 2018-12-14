import { action, computed, observable } from 'mobx';
import { getProfile } from '../api/settings';

export class ProfileStore {
  gender = [
    { id: 0, value: '男' },
    { id: 1, value: '女' }
  ];
  school = [
    { id: 0, value: '台灣大學' },
    { id: 1, value: '清華大學' },
    { id: 2, value: '交通大學' },
    { id: 3, value: '政治大學' },
    { id: 4, value: '成功大學' },
    { id: 5, value: '中央大學' },
    { id: 6, value: '中正大學' },
    { id: 7, value: '中興大學' }
  ];
  education = [
    { id: 0, value: '高中' },
    { id: 1, value: '大學' },
    { id: 2, value: '碩士' },
    { id: 3, value: '博士' },
  ];
  tutorOrStudent = [
    { id: 0, value: '家教' },
    { id: 1, value: '學生' }
  ];
  
  @observable userId = 1;
  @observable selectedTutorOrStudent = '家教';
  @observable name = '';
  @observable selectedGender = '男';
  @observable selectedEducation = '大學';
  @observable selectedSchool = '清華大學';
  @observable major = '';
  @observable goal = '';
  @observable intro = '';

  constructor(getProfile) {
    this.getProfile = getProfile;
  }

  @computed get isTutor() {
    if (this.selectedTutorOrStudent === '家教') {
      return true;
    }

    return false;
  }

  @action setUserId = (userId) => {
    this.userId = userId;
  }

  @action setTutorOrStudent = (tutorOrStudent) => {
    this.selectedTutorOrStudent = tutorOrStudent;
  }

  @action setName = (name) => {
    this.name = name;
  }

  @action setGender = (gender) => {
    this.selectedGender = gender;
  }

  @action setEducation = (education) => {
    this.selectedEducation = education;
  }

  @action setSchool = (school) => {
    this.selectedScool = school;
  }

  @action setMajor = (major) => {
    this.major = major;
  }

  @action setGoal = (goal) => {
    this.goal = goal;
  }

  @action setIntro = (intro) => {
    this.intro = intro;
  }

  load = async () => {
    const response = await this.getProfile(this.userId);
    const userData = await response.json();
    this.selectedTutorOrStudent = userData.tutorOrStudent;
    this.name = userData.name;
    this.selectedGender = userData.gender;
    this.selectedEducation = userData.education;
    this.selectedSchool = userData.school;
    this.major = userData.major;
    this.goal = userData.goal;
    this.intro = userData.intro;
  }

  submit = () => {
    const data = {
      userId: this.userId,
      tutorOrStudent: this.selectedTutorOrStudent,
      name: this.name,
      gender: this.selectedGender,
      education: this.selectedEducation,
      school: this.selectedSchool,
      major: this.major,
      goal: this.goal,
      intro: this.intro
    }
    
    console.log(data);
  }
}

const profileStore = new ProfileStore(getProfile);

export default profileStore;
