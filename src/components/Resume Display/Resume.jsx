import React, { useEffect, useRef, useState } from 'react';
import Personal from './Personal';
import DisplaySectionsResume from './DisplaySectionsResume';

const Resume = ({ personalDetails, sections, style, styling }) => {
  return (
    <div className="resume-content flex items-center justify-center overflow-auto">
      <div className="w-[210mm] h-[297mm] bg-slate-50 shadow-lg overflow-hidden">
        <Personal personalDetails={personalDetails} style={style} styling={styling}/>
        <DisplaySectionsResume
          sections={sections.educations || []}
          type="EDUCATION"
          style={style}
          styling={styling}
        />
        <DisplaySectionsResume
          sections={sections.experience || []}
          type="EXPERIENCE"
          style={style}
          styling={styling}
        />
        <DisplaySectionsResume
          sections={sections.projects || []}
          type="PROJECTS"
          style={style}
          styling={styling}
        />
        <DisplaySectionsResume
          sections={sections.achievements || []}
          type="ACHIEVEMENTS"
          style={style}
          styling={styling}
        />
        <DisplaySectionsResume
          sections={sections.certification || []}
          type="CERTIFICATIONS"
          style={style}
          styling={styling}
        />
        <DisplaySectionsResume
          sections={sections.misc || []}
          type="MISCELLANEOUS"
          style={style}
          styling={styling}
        />
      </div>
    </div>
  );
};

export default Resume;
