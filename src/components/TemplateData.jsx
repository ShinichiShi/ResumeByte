import uniqid from 'uniqid';
const TemplateData = {
  personalDetails: {
    name: 'Supreeth',
    email: 'demo@demo.com',
    phoneNumber: '1234567890',
    address: 'INDIA',
  },
  sections: {
    educations: [
      {
        name: 'DSCE',
        degree: 'CSE',
        percentage: '98%',
        startYear: '2023',
        endYear: '2027',
        id: uniqid(),
      },
      {
        degree: 'Aiml',
        name: 'IIT',
        percentage: '96%',
        startYear: '2020',
        endYear: '2022',
        id: uniqid(),
      },
    ],
    experience: [
      {
        name: 'Microsoft',
        positionTitle: 'UX & UI Designer',
        location: 'New York City, US',
        description:
          'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
        startYear: '2020',
        endYear: 'present',
        id: uniqid(),
      },
      {
        name: 'Google',
        positionTitle: 'UX & UI Designer',
        location: 'New York City, US',
        description:
          'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
        startYear: '2020',
        endYear: 'present',
        id: uniqid(),
      },
    ],
    projects: [
      {
        name: 'iot',
        desc: 'df desc',
        id: uniqid(),
      },
      {
        name: 'iot2',
        desc: 'ds desc',
        id: uniqid(),
      },
    ],
    achievements: [
      {
        name: 'iot',
        desc: 'achievement desc',
        id: uniqid(),
      },
      {
        name: 'iot2',
        desc: 'achievement desc',
        id: uniqid(),
      },
    ],
    certification: [
      {
        name: 'iot',
        desc: 'cert desc',
        id: uniqid(),
      },
      {
        name: 'iot2',
        desc: 'cert desc',
        id: uniqid(),
      },
    ],
    misc: [
      {
        name: 'iot',
        desc: 'misc desc',
        id: uniqid(),
      },
      {
        name: 'iot2',
        desc: 'misc desc',
        id: uniqid(),
      },
    ],
  },
};
export default TemplateData;
