import Input from './Input';
import Buttons from '../../Buttons'
const {Save, Delete, Cancel} = Buttons
export default function AddForm({
  section,
  handleSectionsChange,
  sectionType,
  handleSubmit,
  handleChangeFormData,
  formData,
  operation,
  handleCancel,
  handleDeleteSection,
}) {
  const fields =
    sectionType === 'educations'
      ? ['name', 'degree', 'location', 'startDate', 'endDate']
      : [
          'name',
          'positionTitle',
          'location',
          'startDate',
          'endDate',
          'description',
        ];
  //   const fields = Object.keys(displayFields);

  const displayFields =
    sectionType === 'educations'
      ? {
          name: ['University Name', 'text'],
          degree: ['Degree', 'text'],
          location: ['Location', 'text'],
          startDate: ['Start Date', 'text'],
          endDate: ['End Date', 'text'],
        }
      : {
          name: ['Company Name', 'text'],
          positionTitle: ['Position Title', 'text'],
          location: ['Location', 'text'],
          description: ['Description', 'textarea'],
          startDate: ['Start Date', 'text'],
          endDate: ['End Date', 'text'],
        };

  return (
    <>
      {fields.map((field) => (
        <Input
          key={field}
          name={field}
          placeholder={displayFields[field][0]}
          value={operation !== 'add' ? section[field] : formData.field}
          type={displayFields[field][1]}
          displayName={displayFields[field][0]}
          handleChange={
            operation !== 'add'
              ? (e) => handleSectionsChange(e, sectionType, section.id)
              : handleChangeFormData
          }
        />
      ))}
      {
        operation!=='add' && (
          <Delete onClick={()=>handleDeleteSection(sectionType,section.id)}/>
        )
      }
      {operation === 'add' && (
        <>
        <div className='w-full flex items-center justify-between'>
        <Cancel onClick={handleCancel} />
        <Save onClick={handleSubmit}/>
        </div>
      </>
      )}
    </>
  );
}
