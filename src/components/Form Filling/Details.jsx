import { Children } from 'react';

function Details({ children }) {
  return (
    <>
      <div className="p-2vh m-2vh min-h-[36vh] w-[38vw] flex items-center justify-around flex-col bg-blue-200 rounded-xl">
        {children}
      </div>
    </>
  );
}

export default Details;
