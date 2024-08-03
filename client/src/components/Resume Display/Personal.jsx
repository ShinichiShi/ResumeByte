import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt, FaGithub, FaLinkedin, FaGit}  from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Personal = ({ personalDetails, style, styling }) => {
  const { name, email, phoneNumber, address, github, linkedin } = personalDetails;
  const fontClass = styling.font;

  const containerClasses =
    style === 'informal'
      ? `h-20 flex items-center justify-center flex-col gap-3`
      : `h-20 flex items-center justify-center flex-col gap-3`;

  const nameClasses =
    style === 'informal'
      ? `flex items-center justify-center text-4xl uppercase ${fontClass} `
      : `flex items-center justify-center text-3xl uppercase ${fontClass}`;

  const containerStyles = {
    backgroundColor:
      style === 'informal' ? styling.colors.header : 'transparent',
    color: styling.colors.text,
  };

  return (
    <div className={containerClasses} style={containerStyles}>
      {name !== '' && <div className={nameClasses}>{name}</div>}
      <div className="flex items-center justify-around flex-row gap-3">
      {phoneNumber !== '' && (
          <div className="flex items-center justify-center gap-1">
            <FaPhoneAlt />
            <p className={`${fontClass} text-sm`}>{phoneNumber}</p>
          </div>
        )}
        {email !== '' && (
          <div className="flex items-center justify-center gap-1">
            <IoMdMail />
            <a className={`${fontClass} text-xs underline`} href={`mailto:${email}`} target='_blank'>{email}</a>
          </div>
        )}
        {github !== '' && (
          <div className="flex items-center justify-center gap-1">
            <FaGithub />
            <a className={`${fontClass} text-sm underline`} href={`https://github.com/${github}`} target='_blank'>{github}</a>
          </div>
        )}
        {linkedin !== '' && (
          <div className="flex items-center justify-center gap-1">
            <FaLinkedin />
            <a className={`${fontClass} text-xs underline`} href={`https://www.linkedin.com/in/${linkedin}`} target='_blank'>{linkedin}</a>
          </div>
        )}
        {address !== '' && (
          <div className="flex items-center justify-center gap-1">
            <FaLocationDot />
            <p className={`${fontClass} text-xs`}>{address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Personal;
