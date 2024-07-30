import { useState } from 'react';
import TemplateData from './TemplateData';
import TemplateBar from './components/TemplateBar';
import Resume from './components/Resume Display/Resume';
import Input from './components/Form Filling/Input';
import Section from './components/Form Filling/Section';
import SectionArray from './components/Form Filling/SectionArray';
import AddForm from './components/Form Filling/AddForm';
import uniqid from 'uniqid';
import { FaDownload } from 'react-icons/fa';
import Buttons from './components/Buttons';
import generatePDF from './PdfGenerator';
import { FaFileAlt } from 'react-icons/fa';
import { CiEdit } from "react-icons/ci";

const { Save, Add } = Buttons;
function App() {
  const [personalDetails, setPersonalDetails] = useState(
    TemplateData.personalDetails
  );
  const [sections, setSections] = useState(TemplateData.sections);
  const [activeSection, setActiveSection] = useState('');
  const [addSection, setAddSection] = useState(false);
  const [config, setConfig] = useState('content');
  const [style, setStyle] = useState('formal');
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
        <div className="h-40 w-24 bg-slate-200 p-1 flex self-start items-center flex-col justify-around rounded-xl">
          <div
            className="w-20 cursor-pointer rounded-xl flex items-center flex-col justify-center hover:bg-slate-300"
            onClick={() => {
              setConfig('content');
            }}
          >
            <FaFileAlt className="h-8 w-4" />
            <p className='font-bold'>Content</p>
          </div>
          <div
            className="w-20 cursor-pointer p-1 rounded-xl flex items-center flex-col justify-center hover:bg-slate-300"
            onClick={() => {
              setConfig('config');
            }}
          >
            <CiEdit className="h-8 w-6" />
            <p className='font-bold'>Customize</p>
          </div>
        </div>
        {config === 'content' ? (
          <>
            <div className="flex items-center justify-center flex-col min-w-[30vw] gap-[2vh] self-start">
              <TemplateBar handleClear={handleClear} handleLoad={handleLoad} />
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
                <Save onClick={() => handleClick('Personal Details')} />
              </Section>
              <Section
                name="Education"
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
                      handleSubmit={(e) =>
                        handleSubmitNewSection(e, 'educations')
                      }
                      handleCancel={() => setAddSection(false)}
                      sectionType="educations"
                      formData={formData}
                      handleChangeFormData={handleChangeFormData}
                      operation="add"
                    />
                  </div>
                )}
              </Section>
              <Section
                name="Work Experience"
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
                      handleSubmit={(e) =>
                        handleSubmitNewSection(e, 'experience')
                      }
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
          </>
        ) : (
          <>
            <div className="p-4 flex items-start justify-center flex-col min-w-[30vw] gap-5 self-start bg-slate-200 rounded-xl mt-7 ">
              <div className="p-3 h-44 w-full bg-slate-400 rounded-xl">
                {' '}
                <p className="font-bold text-3xl mb-3">Style</p>
                <div className="w-full flex gap-6 items-center justify-around">
                  <button
                    className="h-20 w-16 border-2 border-slate-800 rounded-lg flex items-center justify-around flex-col"
                    onClick={() => {
                      setStyle('informal');
                    }}
                  >
                    <div className="font-bold text-sm">Informal</div>
                    <div>1</div>
                  </button>
                  <button
                    className="h-20 w-16 border-2 border-slate-800 rounded-lg flex items-center justify-around flex-col"
                    onClick={() => {
                      setStyle('formal');
                    }}
                  >
                    <div className="font-bold">Formal</div>
                    <div>2</div>
                  </button>
                </div>
              </div>
              <div className="p-3 h-44 w-full bg-slate-400 rounded-xl">
                {' '}
                <p className="font-bold text-3xl">Colors</p>
                <div>
                  <div className="p-4 text-xl">Accent Color:</div>
                  <div></div>
                </div>
                <div>
                  <div className="p-4 text-xl">Text Color:</div>
                  <div></div>
                </div>
              </div>
              <div className="p-3 h-44 w-full bg-slate-400 rounded-xl">
                {' '}
                <p className="font-bold text-3xl mb-3">Fonts</p>
                <div className="w-full flex gap-6 items-center justify-around">
                  <div className="h-20 w-16 border-2 border-slate-800 rounded-lg flex items-center justify-around flex-col">
                    <div className="font-bold">Aa</div>
                    <div>Sans</div>
                  </div>
                  <div className="h-20 w-16 border-2 border-slate-800 rounded-lg flex items-center justify-around flex-col">
                    <div className="font-bold">Aa</div>
                    <div>Serif</div>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <button
                  className={`h-12 w-2/5 text-red-800 font-semibold border-2 border-red-300 rounded-[var(--radius)] hover:bg-red-300 text-xl flex items-center justify-center`}
                  onClick={console.log('as')}
                >
                  Reset to Default
                </button>
              </div>
            </div>
          </>
        )}
        <div>
          <Resume
            personalDetails={personalDetails}
            sections={sections}
            style={style}
          />
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
