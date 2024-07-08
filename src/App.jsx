import { useState } from 'react';
import TemplateData from './TemplateData';
import TemplateBar from './components/TemplateBar';
import Resume from './components/Resume';
import Tailblocs from './components/Tailblocs';
import Details from './components/Details';
import Input from './components/Input';
import Section from './Section';
function App() {
  const [PersonalDetails, setPersonalDetails] = useState(
    TemplateData.personalDetails
  );
  const [Sections, setSections] = useState(TemplateData.sections);
  const [activeSection, setActiveSection] = useState('');

  const handleClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? '' : section));
  };
  return (
    <>
      <div className="p-10 flex items-center justify-around bg-slate-800">
        <div className="flex items-center justify-center flex-col min-w-[40vw] gap-[2vh] self-start">
          <TemplateBar />
          {}
          <Section
            name="Personal Details"
            isActive={activeSection === 'Personal Details'}
            onClick={() => handleClick('Personal Details')}
          >
            <Input name="Full name" />
            <Input name="E-mail" />
            <Input name="Phone Number" />
            <Input name="Address" />
          </Section>

          <Section
            name="Education"
            isActive={activeSection === 'Education'}
            onClick={() => handleClick('Education')}
          >

            <Input name="University Name" />
            <Input name="Degree" />
            <Input name="Start Date" />
            <Input name="End name" />
            <Input name="Location" />
          </Section>

          <Section
            name="Work Experience"
            isActive={activeSection === 'Work Experience'}
            onClick={() => handleClick('Work Experience')}
          >
            <Input name="Company Name" />
            <Input name="Position Titke" />
            <Input name="Start Date" />
            <Input name="End Date" />
            <Input name="Location" />
            <Input name="Description" />
          </Section>
        </div>
        <div>
          <Resume />
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
