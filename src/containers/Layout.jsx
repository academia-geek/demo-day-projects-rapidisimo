import React from 'react';
import Header from '../components/Header';


const Layout = ({children}) => {
  return (
    <div
      className="
        w-full md:w-[calc(100vw-340px)] lg:w-[calc(100vw-360px)]
        h-auto lg:h-screen px-4 py-6 md:p-6 lg:p-7
        md:ml-[340px] lg:ml-[360px] bg-background
      "
    >
      <Header />
      {children}
    </div>
  )
}

export default Layout