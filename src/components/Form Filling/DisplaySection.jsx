import React from 'react';
import Details from './Details';
import AddForm from './AddForm';
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
          {isExpanded?<FaEyeSlash className='w-6 h-6'/>:<FaEye className='w-6 h-6'/>}
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
