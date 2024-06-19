import React from 'react'

const Container: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="w-full" >
      <div className="container bg-white mx-auto  min-h-[calc(100vh-208px)] sm:min-h-[calc(100vh-235px)] max-w-[1200px]">
        {children}
      </div>
    </div>
  )
}

export default Container