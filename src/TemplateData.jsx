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
        location: 'India',
        startDate: '09/20/2023',
        endDate: '09/21/2027',
        id: uniqid(),
      },
      {
        degree: 'Aiml',
        name: 'IIT',
        location: 'India',
        startDate: '09/20/2020',
        endDate: '09/21/2022',
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
        startDate: '08/2020',
        endDate: 'present',
        id: uniqid(),
      },
      {
        name: 'Google',
        positionTitle: 'UX & UI Designer',
        location: 'New York City, US',
        description:
          'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
        startDate: '08/2020',
        endDate: 'present',
        id: uniqid(),
      },
    ],
  },
};
export default TemplateData;
