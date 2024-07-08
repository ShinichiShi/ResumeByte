function Input({ name }) {
  return (
    <>
      <div className="bg-slate-100 h-[] w-[90%] text-xl">
        <label htmlFor="name" className="flex gap-12">
          <p className="w-1/3 text-center">{name}</p>:
          <input
            className="flex w-1/2 justify-center placeholder:italic placeholder:text-"
            type="text"
            name="name"
            id="name"
            placeholder={`Enter ${name}`}
          />
          
        </label>
      </div>
      
    </>
  );
}

export default Input;
