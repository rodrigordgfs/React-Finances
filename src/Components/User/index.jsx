import React from 'react'

export default function User({ name }) {
  return (
    <div className='flex items-center px-4 py-2 bg-zinc-800 hover:bg-zinc-700 transition-all cursor-pointer rounded shadow'>
        <p className='font-poppins'>{name}</p>
    </div>
  )
}
