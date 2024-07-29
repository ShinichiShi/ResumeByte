import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Personal = ({ personalDetails }) => {
  const { name, email, phoneNumber, address } = personalDetails;
  return (
    <div className="bg-slate-400 h-[16vh] flex items-center justify-center flex-col gap-[2vh]">
      {name !== '' && (
        <div className="flex items-center justify-center text-5xl">{name}</div>
      )}
      <div className="flex items-center justify-around flex-row gap-10  ">
        {email !== '' && (
          <div className="flex items-center justify-center gap-2">
            <IoMdMail />
            <p>{email}</p>
          </div>
        )}
        {phoneNumber !== '' && (
          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt/>
            <p>{phoneNumber}</p>
          </div>
        )}
        {address !== '' && (
          <div className="flex items-center justify-center gap-2">
            <FaLocationDot/>
            <p>{address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Personal;
