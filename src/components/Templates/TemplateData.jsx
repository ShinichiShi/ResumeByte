import uniqid from 'uniqid';

const TemplateData = {
  personalDetails: {
    name: 'Shinichi Shi',
    email: 'zoro@kaguya-sama.com',
    phoneNumber: '1234567890',
    address: 'Impel Down, Block E',
  },
  sections: {
    educations: [
      {
        name: 'Konoha Academy',
        degree: 'Ninja Training',
        percentage: '100%',
        startYear: '2023',
        endYear: '2027',
        id: uniqid(),
      },
      {
        degree: 'Shinigami Studies',
        name: 'Soul Society Academy',
        percentage: '95%',
        startYear: '2020',
        endYear: '2022',
        id: uniqid(),
      },
    ],
    experience: [
      {
        name: 'Hogwarts',
        positionTitle: 'Wizard',
        location: 'Scotland, UK',
        description:
          'Cast spells and brewed potions for various magical challenges and adventures, ranging from dark magic to magical creature care',
        startYear: '2020',
        endYear: 'present',
        id: uniqid(),
      },
      {
        name: 'Fairy Tail',
        positionTitle: 'Mage',
        location: 'Magnolia, Fiore',
        description:
          'Participated in numerous magical quests and battles, aiding clients and guild members with powerful spells and enchanting skills',
        startYear: '2020',
        endYear: 'present',
        id: uniqid(),
      },
    ],
    projects: [
      {
        name: 'Gundam Project',
        desc: 'Developed mobile suits for interstellar combat and exploration',
        id: uniqid(),
      },
      {
        name: 'Dragon Ball Tournament',
        desc: 'Organized and competed in the ultimate martial arts tournament',
        id: uniqid(),
      },
      {
        name: "Project Blackbeard",
        desc: "Exploration of the dark and enigmatic powers of Blackbeard.",
        id: uniqid()
      },
    ],
    achievements: [
      {
        name: "King of the Pirates",
        desc: "Claimed the title of the greatest pirate on the seas, becoming the ultimate ruler of the Grand Line.",
        id:uniqid()
      },
      {
        name: "Master of Haki",
        desc: "Achieved mastery over all forms of Haki, including Observation, Armament, and Conqueror's Haki.",
        id:uniqid()
      },
      {
        name: "Savior of Dressrosa",
        desc: "Saved the nation of Dressrosa from the tyrannical rule of Donquixote Doflamingo.",
        id:uniqid()
      },
      
      {
        name: "Conqueror of Enies Lobby",
        desc: "Successfully stormed the judicial island of Enies Lobby and defeated the Marine forces stationed there.",
        id:uniqid()
      },
      
    ],
    certification: [
      {
        name: 'Certified Hero',
        desc: 'Received certification from the Hero Association for heroic deeds',
        id: uniqid(),
      },
      {
        name: 'Certified Alchemist',
        desc: 'Completed rigorous training in alchemy and potion-making',
        id: uniqid(),
      },
    ],
    misc: [
      {
        name: 'Soul Reaper',
        desc: 'Appointed as a Soul Reaper to guide lost souls and combat evil spirits',
        id: uniqid(),
      },
      {
        name: 'Dragon Slayer',
        desc: 'Gained the title of Dragon Slayer after defeating a Kaidou',
        id: uniqid(),
      },
    ],
  },
};

export default TemplateData;
