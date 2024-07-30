import React from 'react';
import Details from './Details';
import AddForm from './AddForm';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function DisplaySection({
  section,
  isExpanded,
  onClick,
  handleSectionsChange,
  sectionType,
  handleDeleteSection,
}) {
  return (
    <div className="p-4 w-full flex items-center flex-col justify-around cursor-pointer">
      <div
        className="w-full flex items-center justify-between"
        onClick={onClick}
      >
        <div className="text-2xl">{section.name}</div>
        <div>
          {isExpanded ? (
            <FaEye className="w-6 h-6" />
          ) : (
            <FaEyeSlash className="w-6 h-6" />
          )}
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
