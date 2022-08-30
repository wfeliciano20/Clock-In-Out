import React from 'react';
import Navbar from './Navbar';


const PageNotFound = () => {
  return (
    <div>
      <Navbar />
      <div className=" h-screen flex flex-col justify-center items-center">
        <div>
          <h1 className="text-xl">404: Page Not Found</h1>
        </div>
        
      </div>
    </div>
  )
}

export default PageNotFound
