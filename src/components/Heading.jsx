import React from 'react'

function Heading({
    children,
    className="",
    ...props
}) {
  return (
    <div className='flex justify-center'>
            <h1 className={`text-6xl mb-8 font-bold bg-gradient-to-r from-[#3652e1] to-[#7e56f3] bg-clip-text text-transparent ${className}` } {...props}>{children}</h1>
        </div>
  )
}

export default Heading
