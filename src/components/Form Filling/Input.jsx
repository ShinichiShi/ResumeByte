import React from "react";
function Input({ placeholder, value, type, displayName, name, handleChange }) {
  return (
    <>
      <div className="w-full my-2 bg-slate-100 min-h-[10vh] rounded-xl text-xl flex items-center justify-center">
        {type !== 'textarea' && (
          <>
            <div className="flex gap-12">
              <p className="w-1/3 text-center">{displayName}</p>:
              <input
                className="flex w-1/2 justify-center text-center rounded-xl placeholder:italic placeholder:text-l placeholder:p-[2vh]"
                type={type}
                name={name}
                value={value}
                placeholder={`Enter ${placeholder}`}
                onChange={handleChange}
                // {({value}==='')&& (placeholder={`Enter ${name}`})}
              />
            </div>
          </>
        )}
        {type === 'textarea' && (
          <div className="flex gap-20">
            <div className="flex flex-row gap-11">
              <p className="w-1/3 text-center">{displayName}</p>
            </div>
            <textarea
              className="flex min-h-12 w-5/6 self-center justify-center rounded-xl placeholder:italic placeholder:text-xs placeholder:p-[2vh]"
              type={type}
              name={name}
              value={value}
              placeholder={`Enter ${placeholder}`}
              onChange={handleChange}
              // {({value}==='')&& (placeholder={`Enter ${name}`})}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Input;
