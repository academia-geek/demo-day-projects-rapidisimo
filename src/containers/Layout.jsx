import React from 'react';
import Header from '../components/Header';


const Layout = ({children}) => {
  return (
    <div
      className="
        w-full md:w-[calc(100vw-340px)] lg:w-[calc(100vw-360px)]
        h-screen px-4 py-6 md:py-0 md:p-6 lg:p-12
        md:ml-[340px] lg:ml-[360px]
      "
    >
      <Header />

      {children}
    </div>
  )
}

export default Layout