import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const STRUCTURAL_USER_PROFILE = [
  {
    key: 'userName',
    title: 'Name',
    placeholder: 'Input full your name',
    value: '',
    icon: 'ic-emptyview',
    editable: true,
  },
  {
    key: 'userGender',
    title: 'Gender',
    placeholder: 'Male or Female',
    value: '',
    icon: 'ic-call',
    editable: true,
  },
  {
    key: 'userBirthday',
    title: 'Date of Birth',
    placeholder: 'Your BirthDay',
    value: '',
    icon: 'ic-call',
    editable: true,
  },
  {
    key: 'userPhone',
    title: 'Phone',
    placeholder: 'Your phone number',
    value: '',
    icon: 'ic-call',
    editable: true,
  },
  {
    key: 'userEmail',
    title: 'Email',
    placeholder: 'Your Email',
    value: '',
    icon: 'ic-all',
    editable: false,
  },
  {
    key: 'userAdress',
    title: 'Adress',
    placeholder: 'Your Adress',
    value: '',
    icon: 'ic-location',
    editable: true,
  },
];

export { width, height, STRUCTURAL_USER_PROFILE };
