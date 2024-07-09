import React from 'react';
import Details from './Details';
import AddForm from './AddForm';
function DisplaySection({
  section,
  isExpanded,
  onClick,
  handleSectionsChange,
  sectionType,
  handleDeleteSection,
}) {
  return (
    <div className="p-[2vh] flex items-center flex-col justify-around w-[36vw] cursor-pointer">
      <div
        className="flex items-center justify-between w-full"
        onClick={onClick}
      >
        <div className="text-2xl">{section.name}</div>
        <div>
          <i className={`fa-solid fa-eye${isExpanded ? '' : '-slash'} `}></i>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4">
          <Details>
            <AddForm
              section={section}
              handleSectionsChange={handleSectionsChange}
              sectionType={sectionType}
              handleDeleteSection={handleDeleteSection}
            />
          </Details>
        </div>
      )}
    </div>
  );
}

export default DisplaySection;
