import React from 'react';
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
            <i className="fa-solid fa-envelope" />
            <p>{email}</p>
          </div>
        )}
        {phoneNumber !== '' && (
          <div className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-phone" />
            <p>{phoneNumber}</p>
          </div>
        )}
        {address !== '' && (
          <div className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-location-dot" />
            <p>{address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Personal;
