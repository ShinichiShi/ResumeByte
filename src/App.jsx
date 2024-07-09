import { useState } from 'react';
import TemplateData from './TemplateData';
import TemplateBar from './components/TemplateBar';
import Resume from './components/Resume Display/Resume';
import Input from './components/Form Filling/Input';
import Section from './components/Form Filling/Section';
import SectionArray from './components/Form Filling/SectionArray';
function App() {
  const [personalDetails, setPersonalDetails] = useState(
    TemplateData.personalDetails
  );
  const [sections, setSections] = useState(TemplateData.sections);
  const [activeSection, setActiveSection] = useState('');

  const handleClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? '' : section));
  };
  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const handleClear = () => {
    setPersonalDetails({
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
    });
    setSections({
      educations: [],
      experience: [],
    });
  };
  const handleLoad = () => {
    setPersonalDetails(TemplateData.personalDetails);
    setSections(TemplateData.sections);
  };

  const handleSectionsChange = (e, sectionType, id) => {
    const { name, value } = e.target;
    // section.map((key) => {
    //   if(key.id===e.target.id){
    //     setSections((prevSection) => ({
    //       ...prevSection,
    //       [name]:value
    //     }
    //     ))
    //   }
    // }
    // )
    setSections((prevSections) => ({
      ...prevSections,
      [sectionType]: prevSections[sectionType].map((section) =>
        section.id === id ? { ...section, [name]: value } : section
      ),
    }));
  };

  return (
    <>
      <div className="p-10 flex items-center gap-[4vh] justify-around bg-slate-800">
        <div className="flex items-center justify-center flex-col min-w-[40vw] gap-[2vh] self-start">
          <TemplateBar handleClear={handleClear} handleLoad={handleLoad} />
          {}
          <Section
            name="Personal Details"
            isActive={activeSection === 'Personal Details'}
            onClick={() => handleClick('Personal Details')}
          >
            <Input
              placeholder="Full name"
              type="text"
              displayName="Full Name"
              value={personalDetails.name}
              name="name"
              handleChange={handlePersonalDetailsChange}
            />
            <Input
              placeholder="E-mail"
              type="email"
              displayName="Email"
              value={personalDetails.email}
              name="email"
              handleChange={handlePersonalDetailsChange}
            />
            <Input
              placeholder="Phone Number"
              type="number"
              displayName="Phone Number"
              value={personalDetails.phoneNumber}
              name="phoneNumber"
              handleChange={handlePersonalDetailsChange}
            />
            <Input
              placeholder="Address"
              type="text"
              displayName="Address"
              value={personalDetails.address}
              name="address"
              handleChange={handlePersonalDetailsChange}
            />
          </Section>
          {/* {1)issue with resume font fitting 2)fix the buttons clear load 3)adding new education and experience */}

          <Section
            name="Education"
            isActive={activeSection === 'Education'}
            onClick={() => handleClick('Education')}
          >
            <SectionArray
              sections={sections.educations}
              sectionType="educations"
              handleSectionsChange={handleSectionsChange}
            />
          </Section>

          <Section
            name="Work Experience"
            isActive={activeSection === 'Work Experience'}
            onClick={() => handleClick('Work Experience')}
          >
            <SectionArray
              sections={sections.experience}
              sectionType="experience"
              handleSectionsChange={handleSectionsChange}
            />
          </Section>
        </div>
        <div>
          <Resume personalDetails={personalDetails} sections={sections} />
        </div>
      </div>
    </>
  );
}

export default App;

// import PersonalSection from './components/PersonalSection';
// const [isDisplayPersonal, setIsDisplayPersonal] = useState(false);
// const [isDisplayEdu, setIsDisplayEdu] = useState(false);
// const handleClickPersonal = () => {
//   isDisplayEdu
//     ? (setIsDisplayPersonal(!isDisplayPersonal),
//     setIsDisplayEdu(!isDisplayEdu))
//     : setIsDisplayPersonal(!isDisplayPersonal);
// };
// const handleClickEdu = () => {
//   isDisplayPersonal
//     ? (setIsDisplayEdu(!isDisplayEdu),
//       setIsDisplayPersonal(!isDisplayPersonal))
//     : setIsDisplayEdu(!isDisplayEdu);
// };
// const handleClickPersonal = () => {
// if (isDisplayEdu) {
// setIsDisplayEdu(false);
// }
// setIsDisplayPersonal(!isDisplayPersonal);
// };

// const handleClickEdu = () => {
// if (isDisplayPersonal) {
// setIsDisplayPersonal(false);
// }
// setIsDisplayEdu(!isDisplayEdu);
// };
/* {isDisplayPersonal ? (
            <Details name={'Personal Details'}>
              <Input name="Full name" handleClick={handleClickPersonal} />
              <Input name="E-mail" handleClick={handleClickPersonal} />
              <Input name="Phone Number" handleClick={handleClickPersonal} />
              <Input name="Address" handleClick={handleClickPersonal} />
            </Details>
          ) : (
            <PersonalSection
              name={'Personal Details'}
              handleClick={handleClickPersonal}
            />
          )}
          {isDisplayEdu ? (
            <Details name={'Education'}>
              <Input name="College Name" handleClick={handleClickEdu} />
            </Details>
          ) : (
            <PersonalSection name={'Education'} handleClick={handleClickEdu} />
          )} */
