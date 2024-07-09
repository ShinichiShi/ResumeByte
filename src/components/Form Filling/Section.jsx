import Details from './Details';

function Section({ name, isActive, onClick, children }) {
  return (
    <div className="p-[2vh] w-full bg-slate-200 flex items-center justify-between rounded-lg flex-col ">
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={onClick}
      >
        <div className="text-2xl">{name}</div>
        <div>
          <i className={`fa-solid fa-caret-${isActive ? 'up' : 'down'}`}></i>
        </div>
      </div>
      {isActive && (
        <div className="mt-4">
          <Details>{children}</Details>
          {name === 'Personal Details' && (
            <button className="bg-red-600" onClick={onClick}>
              Save
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
