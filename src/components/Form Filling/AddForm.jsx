import Input from './Input';
export default function AddForm({
  section,
  handleSectionsChange,
  sectionType,
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
          value={section[field]}
          type={displayFields[field][1]}
          displayName={displayFields[field][0]}
          handleChange={(e) => handleSectionsChange(e, sectionType, section.id)}
        />
      ))}
    </>
  );
}
