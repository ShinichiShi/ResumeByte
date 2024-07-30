import Details from './Details';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

function Section({ name, isActive, onClick, children }) {
  return (
    <div className="p-3 w-full bg-slate-200 flex items-center justify-between rounded-lg flex-col ">
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={onClick}
      >
        <div className="text-2xl">{name}</div>
        <div>
          {isActive ? (
            <FaCaretUp className="h-6" />
          ) : (
            <FaCaretDown className="h-6" />
          )}
        </div>
      </div>
      {isActive && (
        <div className="mt-4 w-full">
          <Details>{children}</Details>
        </div>
      )}
    </div>
  );
}

export default Section;
