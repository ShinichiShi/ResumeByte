import React from 'react';
import Personal from './Personal';
import DisplaySectionsResume from './DisplaySectionsResume';

function Resume({ personalDetails, sections }) {
  return (
    <div className="p-[4vh] box-border flex items-center justify-center overflow-auto ">
     
      <div className="resume-content h-[100vh] w-[90vh] bg-slate-50 overflow-hidden">
        <Personal personalDetails={personalDetails} />
        <DisplaySectionsResume
          sections={sections.educations || []}
          type="EDUCATION"
        />
        <DisplaySectionsResume
          sections={sections.experience || []}
          type="EXPERIENCE"
        />
      </div>

    </div>
  );
}

export default Resume;
