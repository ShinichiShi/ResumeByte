import uniqid from "uniqid";
const TemplateData = {
  personalDetails: {
    name: "Supreeth",
    email: "demo@demo.com",
    phoneNumber: "1234567890",
    address: "india",
  },
  sections: {
    educations: [
      {
        degree: "CSE",
        schoolName: "DSCE",
        location: "India",
        startDate: "23/12/23",
        endDate: "present",
        isCollapsed: "true",
        id: uniqid(),
      },
      {
        degree: "Aiml",
        schoolName: "IIT",
        location: "India",
        startDate: "24/12/24",
        endDate: "present",
        isCollapsed: "true",
        id: uniqid(),
      },
    ],
    experience: [
      {
        companyName: "Microsoft",
        positionTitle: "UX & UI Designer",
        location: "New York City, US",
        description:
          "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        id: uniqid(),
      },
      {
        companyName: "Google",
        positionTitle: "UX & UI Designer",
        location: "New York City, US",
        description:
          "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],
  },
};
export default TemplateData;
