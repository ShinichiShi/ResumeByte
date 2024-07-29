import { useState } from 'react';
import TemplateData from './TemplateData';
import TemplateBar from './components/TemplateBar';
import Resume from './components/Resume Display/Resume';
import Input from './components/Form Filling/Input';
import Section from './components/Form Filling/Section';
import SectionArray from './components/Form Filling/SectionArray';
import AddForm from './components/Form Filling/AddForm';
import uniqid from 'uniqid';
import { FaDownload } from "react-icons/fa";
import Buttons from './components/Buttons';
import generatePDF from './PdfGenerator';

const { Save, Add } = Buttons;
function App() {
  const [personalDetails, setPersonalDetails] = useState(
    TemplateData.personalDetails
  );
  const [sections, setSections] = useState(TemplateData.sections);
  const [activeSection, setActiveSection] = useState('');
  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    degree: '',
    name: '',
    location: '',
    startDate: '',
    endDate: '',
  });

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
    setAddSection(false);
  };

  const handleLoad = () => {
    setPersonalDetails(TemplateData.personalDetails);
    setSections(TemplateData.sections);
    setAddSection(false);
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

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmitNewSection = (e, type) => {
    e.preventDefault();
    handleAddNewSection(formData, type);
    setFormData({
      degree: '',
      name: '',
      location: '',
      startDate: '',
      endDate: '',
    });
    setAddSection(false);
  };

  const handleAddNewSection = (newSection, type) => {
    setSections((prevSections) => ({
      ...prevSections,
      [type]: [...prevSections[type], { ...newSection, id: uniqid() }],
    }));
  };
  
  const handleDeleteSection = (type, id) => {
    setSections((prevSections) => ({
      ...prevSections,
      [type]: prevSections[type].filter((section) => section.id !== id),
    }));
  };

  return (
    <>
      <div className="p-10 flex items-center gap-[4vh] justify-around bg-slate-800">
        <div className="flex items-center justify-center flex-col min-w-[40vw] gap-[2vh] self-start">
          {/* for load and delete template */}
          <TemplateBar handleClear={handleClear} handleLoad={handleLoad} />
          <Section name="Personal Details"
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
            <Save onClick={() => handleClick('Personal Details')} />
          </Section>
          <Section name="Education"
            isActive={activeSection === 'Education'}
            onClick={() => handleClick('Education')}
          >
            {!addSection && (
              <>
                <SectionArray
                  sections={sections.educations}
                  sectionType="educations"
                  handleSectionsChange={handleSectionsChange}
                  handleDeleteSection={handleDeleteSection}
                />
                <Add onClick={() => setAddSection(true)} />
              </>
            )}
            {addSection && (
              <div>
                <AddForm
                  handleSubmit={(e) => handleSubmitNewSection(e, 'educations')}
                  handleCancel={() => setAddSection(false)}
                  sectionType="educations"
                  formData={formData}
                  handleChangeFormData={handleChangeFormData}
                  operation="add"
                />
              </div>
            )}
          </Section>

          <Section name="Work Experience"
            isActive={activeSection === 'Work Experience'}
            onClick={() => handleClick('Work Experience')}
          >
            {!addSection && (
              <>
                <SectionArray
                  sections={sections.experience}
                  sectionType="experience"
                  handleSectionsChange={handleSectionsChange}
                  handleDeleteSection={handleDeleteSection}
                />
                <Add onClick={() => setAddSection(true)} />
              </>
            )}
            {addSection && (
              <>
                <AddForm
                  handleSubmit={(e) => handleSubmitNewSection(e, 'experience')}
                  handleCancel={() => setAddSection(false)}
                  sectionType="experience"
                  formData={formData}
                  handleChangeFormData={handleChangeFormData}
                  operation="add"
                />
              </>
            )}
          </Section>
          <button
            onClick={generatePDF}
            className="bg-blue-500 flex items-center justify-center gap-3 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors duration-300"
          >
            <FaDownload />
            Download PDF
          </button>
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
