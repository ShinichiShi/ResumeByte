import React, { useState } from 'react';
import DisplaySection from './DisplaySection';

function SectionArray({
  sections,
  sectionType,
  handleSectionsChange,
  handleDeleteSection,
}) {
  const [expandedId, setExpandedId] = useState(null);

  const handleClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full">

      { 
      sections.map((section) => (
        <DisplaySection
          key={section.id}
          section={section}
          isExpanded={expandedId === section.id}
          onClick={() => handleClick(section.id)}
          handleSectionsChange={handleSectionsChange}
          sectionType={sectionType}
          handleDeleteSection={handleDeleteSection}
        />
      ))
    }
    {sections.length===0 && (
      <div className='flex items-center justify-center gap-1 text-2xl'>
        Kindly Add <p className='capitalize'>{sectionType}...</p>
      </div>
    )}
    </div>
  );
}

export default SectionArray;
