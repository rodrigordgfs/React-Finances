import React from 'react'

export default function IconButton({ children }) {
  return (
    <div className='bg-zinc-800 hover:bg-zinc-700 transition-all h-14 w-14 flex items-center justify-center rounded shadow cursor-pointer'>
        {children}
    </div>
  )
}
