import React from 'react';


const Layout = ({children}) => {
  return (
    <div
      className="
        w-full md:w-[calc(100vw-340px)] lg:w-[calc(100vw-360px)]
        h-screen p-4 md:p-6 lg:p-12
        md:ml-[340px] lg:ml-[360px]
      "
    >
      {children}
    </div>
  )
}

export default Layout