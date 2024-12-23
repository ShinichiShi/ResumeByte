import { useState, useEffect } from 'react';
import TemplateData from './Templates/TemplateData';
import TemplateBar from './Templates/TemplateBar';
import Resume from './Resume Display/Resume';
import Input from './Form Filling/Input';
import Section from './Form Filling/Section';
import SectionArray from './Form Filling/SectionArray';
import AddForm from './Form Filling/AddForm';
import uniqid from 'uniqid';
import { FaDownload } from 'react-icons/fa';
import Buttons from './Buttons';
import generatePDF from './PdfGenerator';
import { FaFileAlt } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import TemplateStyle from './Templates/TemplateStyle';
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
  const [styling, setStyling] = useState(TemplateStyle());
  const [formData, setFormData] = useState({
    name: '',
    degree: '',
    percentage: '',
    startYear: '',
    endYear: '',
    desc: '',
    location: '',
  });
  useEffect(() => {
    let personal = localStorage.getItem('personal');
    let sections = localStorage.getItem('sections')
    if (personal) {
      let data = JSON.parse(localStorage.getItem('personal'));
      setPersonalDetails(data);
    }
    if (sections) {
      let data = JSON.parse(localStorage.getItem('sections'));
      setSections(data);
    }
  }, [])
  
  const saveToLocalStorage = () => {
    localStorage.setItem('personal', JSON.stringify(personalDetails));
    localStorage.setItem('sections', JSON.stringify(sections));
  };

  const handleClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? '' : section));
    setAddSection(false);
  };

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    saveToLocalStorage();
  };

  const handleClear = () => {
    setPersonalDetails({
      name: '',
    email: '',
    github:'',
    linkedin:'',
    phoneNumber: '',
    address: '',
    });
    setSections({
      educations: [],
      experience: [],
      projects: [],
      achievements: [],
      certification: [],
      misc: [],
    });
    setAddSection(false);
    saveToLocalStorage();
  };

  const handleLoad = () => {
    setPersonalDetails(TemplateData.personalDetails);
    setSections(TemplateData.sections);
    setAddSection(false);
    saveToLocalStorage();
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
    saveToLocalStorage();
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
    saveToLocalStorage();
  };

  const handleAddNewSection = (newSection, type) => {
    setSections((prevSections) => ({
      ...prevSections,
      [type]: [...prevSections[type], { ...newSection, id: uniqid() }],
    }));
    saveToLocalStorage();
  };

  const handleDeleteSection = (type, id) => {
    setSections((prevSections) => ({
      ...prevSections,
      [type]: prevSections[type].filter((section) => section.id !== id),
    }));
  };
  const handleColorChange = (e, type) => {
    const newColor = e.target.value;
    const newStyling = JSON.parse(JSON.stringify(styling));
    newStyling.colors[type] = newColor;
    setStyling(newStyling);
  };
  const handleFont = (type) => {
    const newFont = JSON.parse(JSON.stringify(styling));
    newFont.font = type;
    setStyling(newFont);
  };
  const handleResetStyles = () => {
    setStyling(TemplateStyle());
    setFont('font-serif');
  };
  return (
    <>
      <div className="h-full w-full p-10 flex flex-col md:flex-row items-center justify-center gap-4 bg-slate-800 ">
        <div className="md:h-40 md:w-24 h-20 w-1/2 bg-slate-200 p-1 flex md:self-start text-xs md:text-sm items-center md:flex-col justify-around rounded-xl">
          <div
            className={`w-20 cursor-pointer rounded-xl flex items-center flex-col justify-center ${config==='content'?'bg-slate-300':'hover:bg-slate-300'}`}
            onClick={() => {
              setConfig('content');
            }}
          >
            <FaFileAlt className="h-8 w-4" />
            <p className="font-bold">Content</p>
          </div>
          <div
            className={`w-20 cursor-pointer p-1 rounded-xl flex items-center flex-col justify-center ${config==='config'?'bg-slate-300':'hover:bg-slate-300'}`}
            onClick={() => {
              setConfig('config');
            }}
          >
            <CiEdit className="h-8 w-6" />
            <p className="font-bold">Customize</p>
          </div>
        </div>
        {config === 'content' ? (
          <>
            <div className="flex items-center justify-center flex-col min-w-[30vw] gap-[2vh] self-center md:self-start">
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
                  placeholder="Phone Number"
                  type="number"
                  displayName="Phone Number"
                  value={personalDetails.phoneNumber}
                  name="phoneNumber"
                  handleChange={handlePersonalDetailsChange}
                />
                <Input
                  placeholder="G-mail"
                  type="email"
                  displayName="Gmail"
                  value={personalDetails.email}
                  name="email"
                  handleChange={handlePersonalDetailsChange}
                />
                <Input
                  placeholder="Username"
                  type="text"
                  displayName="Github"
                  value={personalDetails.github}
                  name="github"
                  handleChange={handlePersonalDetailsChange}
                />
                <Input
                  placeholder="Username"
                  type="text"
                  displayName="Linkedin"
                  value={personalDetails.linkedin}
                  name="linkedin"
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
              <Section
                name="Projects"
                isActive={activeSection === 'Projects'}
                onClick={() => handleClick('Projects')}
              >
                {!addSection && (
                  <>
                    <SectionArray
                      sections={sections.projects}
                      sectionType="projects"
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
                        handleSubmitNewSection(e, 'projects')
                      }
                      handleCancel={() => setAddSection(false)}
                      sectionType="projects"
                      formdata={formData}
                      handleChangeFormData={handleChangeFormData}
                      operation="add"
                    />
                  </>
                )}
              </Section>
              <Section
                name="Achievements"
                isActive={activeSection === 'Achievements'}
                onClick={() => handleClick('Achievements')}
              >
                {!addSection && (
                  <>
                    <SectionArray
                      sections={sections.achievements}
                      sectionType="achievements"
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
                        handleSubmitNewSection(e, 'achievements')
                      }
                      handleCancel={() => setAddSection(false)}
                      sectionType="achievements"
                      formdata={formData}
                      handleChangeFormData={handleChangeFormData}
                      operation="add"
                    />
                  </>
                )}
              </Section>
              <Section
                name="Certifications"
                isActive={activeSection === 'Certifications'}
                onClick={() => handleClick('Certifications')}
              >
                {!addSection && (
                  <>
                    <SectionArray
                      sections={sections.certification}
                      sectionType="certifications"
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
                        handleSubmitNewSection(e, 'certifications')
                      }
                      handleCancel={() => setAddSection(false)}
                      sectionType="certifications"
                      formdata={formData}
                      handleChangeFormData={handleChangeFormData}
                      operation="add"
                    />
                  </>
                )}
              </Section>
              <Section
                name="Miscellaneous"
                isActive={activeSection === 'Misc'}
                onClick={() => handleClick('Misc')}
              >
                {!addSection && (
                  <>
                    <SectionArray
                      sections={sections.misc}
                      sectionType="misc"
                      handleSectionsChange={handleSectionsChange}
                      handleDeleteSection={handleDeleteSection}
                    />
                    <Add onClick={() => setAddSection(true)} />
                  </>
                )}
                {addSection && (
                  <>
                    <AddForm
                      handleSubmit={(e) => handleSubmitNewSection(e, 'misc')}
                      handleCancel={() => setAddSection(false)}
                      sectionType="misc"
                      formdata={formData}
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
            <div className="p-4 flex items-start justify-center flex-col min-w-[60vw] md:min-w-[30vw] gap-5 md:self-start self-center bg-slate-200 rounded-xl mt-7 ">
              <div className="p-3 h-44 w-full  bg-blue-200 rounded-xl">
                {' '}
                <p className="font-bold text-3xl mb-3">Style</p>
                <div className="w-full flex gap-6 items-center justify-around">
                  
                  <button
                    className={`h-12 w-1/2 border-2 border-slate-800 rounded-lg flex items-center justify-around flex-col  
                      ${style==='informal'?'bg-blue-400':'hover:bg-blue-300'}`}
                    onClick={() => {
                      setStyle('informal');
                    }}
                  >
                    <div className="font-bold text-xl">Informal</div>
                  </button>
                  <button
                    className={`h-12 w-1/2 border-2 border-slate-800 rounded-lg flex items-center justify-around flex-col 
                      ${style==='formal'?'bg-blue-400':'hover:bg-blue-300'}`}
                    onClick={() => {
                      setStyle('formal');
                    }}
                  >
                    <div className="font-bold text-xl">Formal</div>
                  </button>
                </div>
              </div>
              <div className="p-3 h-44 w-full  bg-blue-200 rounded-xl">
                {' '}
                <p className="font-bold text-3xl">Colors</p>
                <div className="flex items-center justify-between">
                  <div className="p-4 text-xl font-bold">Header Color:</div>
                  <input
                    type="color"
                    name="color-header"
                    className="w-15 rounded-lg border-0 p-1 cursor-pointer"
                    defaultValue={styling.colors.header}
                    onChange={(e) => {
                      handleColorChange(e, 'header');
                    }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="p-4 text-xl font-bold">Text Color:</div>
                  <input
                    type="color"
                    name="color-text"
                    className="w-15 rounded-lg border-0 p-1 cursor-pointer"
                    defaultValue={styling.colors.text}
                    onChange={(e) => {
                      handleColorChange(e, 'text');
                    }}
                  />
                </div>
              </div>
              <div className="p-3 h-44 w-full bg-blue-200 rounded-xl">
                {' '}
                <p className="font-bold text-3xl mb-3">Fonts</p>
                <div className="w-full flex gap-6 items-center justify-around">
                  <div
                    className={`h-20 w-16 border-2 border-slate-800 rounded-lg flex items-center justify-around flex-col cursor-pointer ${styling.font==='font-mono'?'bg-blue-400':'hover:bg-blue-300'}`}
                    onClick={() => handleFont('font-mono')}
                  >
                    <div className="font-bold font-mono">Aa</div>
                    <div className="font-mono">Mono</div>
                  </div>
                  <div
                    className={`h-20 w-16 border-2 border-slate-800 rounded-lg flex items-center justify-around flex-col  cursor-pointer ${styling.font==='font-serif'?'bg-blue-400':'hover:bg-blue-300'}`}
                    onClick={() => handleFont('font-serif')}
                  >
                    <div className="font-bold font-serif">Aa</div>
                    <div className="font-serif">Serif</div>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <button
                  className="h-12 w-2/5 text-red-800 font-semibold border-2 border-red-300 rounded-[var(--radius)] hover:bg-red-300 md:text-xl text-lg flex items-center justify-center"
                  onClick={handleResetStyles}
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
            styling={styling}
          />
        </div>
      </div>
    </>
  );
}

export default App;
