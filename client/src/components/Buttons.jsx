import { FaCirclePlus } from 'react-icons/fa6';

function Save({ onClick }) {
  return (
    <>
      <button
        className="bg-blue-400 text-white rounded-lg px-4 py-2 hover:bg-blue-500 transition-colors duration-300"
        onClick={onClick}
      >
        Save
      </button>
    </>
  );
}

function Delete({ onClick }) {
  return (
    <>
      <button
        className="bg-red-400 text-white rounded-lg px-4 py-2 hover:bg-red-500 transition-colors duration-300"
        onClick={onClick}
      >
        Delete
      </button>
    </>
  );
}

function Cancel({ onClick }) {
  return (
    <>
      <button
        className="border border-blue-600 text-blue-600 rounded-lg px-4 py-2 hover:bg-blue-100 transition-colors duration-300"
        onClick={onClick}
      >
        Cancel
      </button>
    </>
  );
}
function Add({ onClick }) {
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="flex items-center" onClick={onClick}>
          <FaCirclePlus className="text-blue-950 rotate-360 w-7 h-7" />
        </button>
      </div>
    </>
  );
}
export default { Save, Delete, Cancel, Add };
