function TemplateBar({handleLoad,handleClear}) {
  return (
    <>
      <div className="flex m-[5vh] h-[8vh] min-w-full bg-slate-300 rounded-[var(--radius)] items-center justify-center gap-[1vh]">
        <button
          className={`h-[6vh] w-2/5 text-red-800 font-semibold border-2 border-red-300 rounded-[var(--radius)] hover:bg-red-300 text-xl`}
          onClick={handleClear}
        >
          Clear Resume
        </button>
        <button
          className={`h-[6vh] w-2/5 text-xl font-semibold rounded-[var(--radius)] border-2 border-blue-300 hover:bg-[rgb(161,215,233)]`}
          onClick={handleLoad}
        >
          Load Template
        </button>
      </div>
    </>
  );
}

export default TemplateBar;
