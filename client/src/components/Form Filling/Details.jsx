function Details({ children }) {
  return (
    <>
      <div className="min-h-[36vh] w-full flex items-center justify-around flex-col bg-blue-200 rounded-xl">
        {children}
      </div>
    </>
  );
}

export default Details;
