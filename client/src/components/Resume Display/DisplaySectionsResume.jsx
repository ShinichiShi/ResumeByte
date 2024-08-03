import React from 'react';

function DisplaySectionsResume({ sections, type, style, styling }) {
  const sectionClass =
    style === 'informal' ? 'informal-section' : 'formal-section';

  const textStyle = {
    color: styling.colors.text,
  };

  return (
    <div className="p-2">
      {sections.length !== 0 && (
        <div>
          <h2
            className={`text-xl font-bold mb-2 ${styling.font}`}
            style={textStyle}
          >
            {type}
          </h2>
          <div className="h-px w-full bg-black"></div>
        </div>
      )}

      {sections.map((section) => (
        <div key={section.id} className={sectionClass}>
          {type === 'EDUCATION' && (
            <>
              <div>
                <h3
                  className={`text-base font-semibold ${styling.font}`}
                  style={textStyle}
                >
                  {section.name}
                </h3>
                <p
                  className={`italic text-sm ${styling.font}`}
                  style={textStyle}
                >
                  {section.degree}
                </p>
              </div>
              <div>
                <p
                  className={`text-base text-right ${styling.font} `}
                  style={textStyle}
                >
                  {section.percentage}
                </p>
                <p
                  className={`italic text-right text-sm ${styling.font} `}
                  style={textStyle}
                >
                  {section.startYear} - {section.endYear}
                </p>
              </div>
            </>
          )}
          {type === 'EXPERIENCE' && (
            <>
              <div className="w-full flex items-center flex-col">
                <div className="w-full flex items-center justify-between flex-row">
                  <div>
                    <h3
                      className={`text-base font-semibold ${styling.font}`}
                      style={textStyle}
                    >
                      {section.name}
                    </h3>
                    <p
                      className={`italic text-sm ${styling.font} `}
                      style={textStyle}
                    >
                      {section.positionTitle}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`text-base text-right ${styling.font}`}
                      style={textStyle}
                    >
                      {section.location}
                    </p>
                    <p
                      className={`italic text-sm text-right  ${styling.font}`}
                      style={textStyle}
                    >
                      {section.startYear} - {section.endYear}
                    </p>
                  </div>
                </div>
                <div
                  className={`w-full text-left text-xs ${styling.font}`}
                  style={textStyle}
                >
                  <p>{section.description}</p>
                </div>
              </div>
            </>
          )}
          {type !== 'EDUCATION' && type !== 'EXPERIENCE' && (
            <>
              <div
                className={`flex items-center justify-start gap-3 ${styling.font}`}
                style={textStyle}
              >
                <h3
                  className={`w-40 flex items-center justify-start text-base font-semibold ${styling.font}`}
                  style={textStyle}
                >
                  {section.name}
                </h3>
                <p
                  className={`flex items-center justify-start text-base ${styling.font}`}
                >
                  : {section.desc}
                </p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default DisplaySectionsResume;
