import React from 'react';

function DisplaySectionsResume({ sections, type }) {
  return (
    <div className="mt-4 p-4 bg-gray-100">
      {sections.length !== 0 && (
        <h2 className="text-2xl font-bold mb-2">{type}</h2>
      )}
      {sections.map((section) => (
        <div
          key={section.id}
          className="mb-4 p-4 bg-white rounded-lg shadow-md flex items-center justify-between flex-row"
        >
          {type === 'EDUCATION' && (
            <>
              <div>
                <h3 className="text-l font-semibold">{section.name}</h3>
                <p className="italic">{section.degree}</p>
              </div>
              <div>
                <p>
                  {section.startDate} - {section.endDate}
                </p>
                <p className="italic text-right">{section.location}</p>
              </div>
            </>
          )}
          {type === 'EXPERIENCE' && (
            <>
              <div className="flex items-center justify-normal flex-col">
                <div className="w-full flex items-center justify-between flex-row">
                  <div>
                    <h3 className="text-l font-semibold">{section.name}</h3>
                    <p className="italic">{section.positionTitle}</p>
                  </div>
                  <div>
                    <p>{section.location}</p>
                    <p className="italic">
                      {section.startDate} - {section.endDate}
                    </p>
                  </div>
                </div>
                <div>
                  {' '}
                  <p className="text-xs">{section.description}</p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default DisplaySectionsResume;
