import React, { useState } from 'react';
import DisplaySection from './DisplaySection';

function SectionArray({ sections, sectionType, handleSectionsChange }) {
  const [expandedId, setExpandedId] = useState(null);

  const handleClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      {sections.map((section) => (
        <DisplaySection
          key={section.id}
          section={section}
          isExpanded={expandedId === section.id}
          onClick={() => handleClick(section.id)}
          handleSectionsChange={handleSectionsChange}
          sectionType={sectionType}
        />
      ))}
    </div>
  );
}

export default SectionArray;
