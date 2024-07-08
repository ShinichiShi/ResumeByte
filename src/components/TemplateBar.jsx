import { useState } from 'react';

function TemplateBar() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <div className="flex m-[5vh] h-[8vh] min-w-full bg-slate-300 rounded-[var(--radius)] items-center justify-center gap-[1vh]">
        <button
          className={`h-[6vh] w-2/5 text-red-800 text-[var(--font-size)] border-2 border-red-300 rounded-[var(--radius)] hover:bg-red-300 `}
          onClick={() => handleClick('clear')}
        >
          Clear Resume
        </button>
        <button
          className={`h-[6vh] w-2/5 text-[var(--font-size)] rounded-[var(--radius)] border-2 border-blue-300 hover:bg-[rgb(161,215,233)]`}
          onClick={() => handleClick('load')}
        >
          Load Template
        </button>
      </div>
    </>
  );
}

export default TemplateBar;
