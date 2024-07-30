import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Personal = ({ personalDetails, style }) => {
  const { name, email, phoneNumber, address } = personalDetails;

  const containerClasses =
    style === 'informal'
      ? 'bg-slate-400 h-20 flex items-center justify-center flex-col gap-3'
      : 'h-20 flex items-center justify-center flex-col gap-3';

  const nameClasses =
    style === 'informal'
      ? 'flex items-center justify-center text-4xl uppercase'
      : 'flex items-center justify-center text-3xl uppercase';

  return (
    <div className={containerClasses}>
      {name !== '' && <div className={nameClasses}>{name}</div>}
      <div className="flex items-center justify-around flex-row gap-10">
        {email !== '' && (
          <div className="flex items-center justify-center gap-2">
            <IoMdMail />
            <p>{email}</p>
          </div>
        )}
        {phoneNumber !== '' && (
          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt />
            <p>{phoneNumber}</p>
          </div>
        )}
        {address !== '' && (
          <div className="flex items-center justify-center gap-2">
            <FaLocationDot />
            <p>{address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Personal;
