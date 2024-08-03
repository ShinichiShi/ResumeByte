import Input from './Input';
import Buttons from '../Buttons';
const { Save, Delete, Cancel } = Buttons;
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
      ? ['name', 'degree', 'percentage', 'startYear', 'endYear']
      : [
          'name',
          'positionTitle',
          'location',
          'startYear',
          'endYear',
          'description',
        ];

  const displayFields =
    sectionType === 'educations'
      ? {
          name: ['University Name', 'text'],
          degree: ['Degree', 'text'],
          percentage: ['Percentage', 'text'],
          startYear: ['Start Year', 'text'],
          endYear: ['End Year', 'text'],
        }
      : {
          name: ['Company Name', 'text'],
          positionTitle: ['Position Title', 'text'],
          location: ['Location', 'text'],
          description: ['Description', 'textarea'],
          startYear: ['Start Year', 'text'],
          endYear: ['End Year', 'text'],
        };
  const miscFields = ['name', 'desc'];
  const displayMiscFields = {
    name: ['Name', 'text'],
    desc: ['Description', 'textarea'],
  };
  return (
    <>
      {(sectionType === 'educations' || sectionType === 'experience') &&
        fields.map((field) => (
          <Input
            key={field}
            name={field}
            placeholder={displayFields[field][0]}
            value={operation !== 'add' ? section[field] : undefined}
            // value={operation !== 'add' ? section[field] : formData.field}
            type={displayFields[field][1]}
            displayName={displayFields[field][0]}
            handleChange={
              operation !== 'add'
                ? (e) => handleSectionsChange(e, sectionType, section.id)
                : handleChangeFormData
            }
          />
        ))}
      {sectionType !== 'educations' &&
        sectionType !== 'experience' &&
        miscFields.map((field) => (
          <Input
            key={field}
            name={field}
            placeholder={displayMiscFields[field][0]}
            value={operation !== 'add' ? section[field] : undefined}
            type={displayMiscFields[field][1]}
            displayName={displayMiscFields[field][0]}
            handleChange={
              operation !== 'add'
                ? (e) => handleSectionsChange(e, sectionType, section.id)
                : handleChangeFormData
            }
          />
        ))}

      {operation !== 'add' && (
        <Delete onClick={() => handleDeleteSection(sectionType, section.id)} />
      )}
        <>
          <div className="w-full flex items-center justify-between">
            <Cancel onClick={handleCancel} />
            <Save onClick={handleSubmit} />
          </div>
        </>
    </>
  );
}
