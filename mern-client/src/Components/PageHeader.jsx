import React from 'react'

const PageHeader = ({title, path}) => {
  return (
    <div className='py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center'>
      <div>
        <h2 className='mb-1 text-3xl font-medium text-center text-blue'>{title}</h2>
        <p className='text-sm text-center'><a href="/">Home</a>/{path}</p>
      </div>
    </div>
  )
}

export default PageHeader
