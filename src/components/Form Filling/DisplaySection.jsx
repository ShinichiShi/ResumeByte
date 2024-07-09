import React from 'react';
import Details from './Details';
import Input from './Input';
import AddForm from './AddForm';
function DisplaySection({
  section,
  isExpanded,
  onClick,
  handleSectionsChange,
  sectionType,
}) {
  return (
    <div className="p-[2vh] flex items-center flex-col justify-around w-[36vw] cursor-pointer">
      <div
        className="flex items-center justify-between w-full"
        onClick={onClick}
      >
        <div className="text-2xl">{section.name}</div>
        <div>
          <i className={`fa-solid fa-caret-${isExpanded ? 'up' : 'down'}`}></i>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4">
          <Details>
            <AddForm
              section={section}
              handleSectionsChange={handleSectionsChange}
              sectionType={sectionType}
            />
          </Details>
          <button className="bg-red-600" onClick={onClick}>
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default DisplaySection;
