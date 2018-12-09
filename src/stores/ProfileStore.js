import { observable, action } from 'mobx';

export class ProfileStore {
  @observable userId = '';
  @observable tutorOrStudent = [
    { id: 0, value: '家教' },
    { id: 1, value: '學生' }
  ];
  @observable selectedTutorOrStudent = '家教';
  @observable name = '';
  @observable gender = [
    { id: 0, value: '男' },
    { id: 1, value: '女' }
  ];
  @observable selectedGender = '男';
  @observable education = [
    { id: 0, value: '高中' },
    { id: 1, value: '大學' },
    { id: 2, value: '碩士' },
    { id: 3, value: '博士' },
  ];
  @observable selectedEducation = '大學';
  @observable major = '';
  @observable intro = '';

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

  @action setMajor = (major) => {
    this.major = major;
  }

  @action setIntro = (intro) => {
    this.intro = intro;
  }

  submit = () => {
    const data = {
      userId: this.userId,
      tutorOrStudent: this.selectedTutorOrStudent,
      name: this.name,
      gender: this.selectedGender,
      education: this.selectedEducation,
      major: this.major,
      intro: this.intro
    }
    
    console.log(data);
  }
}

const profileStore = new ProfileStore();

export default profileStore;
