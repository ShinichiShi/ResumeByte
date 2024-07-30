import React, { useEffect, useRef, useState } from 'react';
import Personal from './Personal';
import DisplaySectionsResume from './DisplaySectionsResume';

const Resume = ({ personalDetails, sections, style }) => {
  

  return (
    <div className="resume-content flex items-center justify-center overflow-auto">
      <div className="w-[210mm] h-[297mm] bg-slate-50 shadow-lg overflow-hidden">
          <Personal personalDetails={personalDetails} style={style}/>
          <DisplaySectionsResume
            sections={sections.educations || []}
            type="EDUCATION"
            style={style}
          />
          <DisplaySectionsResume
            sections={sections.experience || []}
            type="EXPERIENCE"
            style={style}
          />
        </div>
    </div>
  );
};

export default Resume;
